import { useMemo, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Activity } from './components/Activity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useGithub } from './hooks/useGithub';
import { useReadmes } from './hooks/useReadmes';
import { useReveal } from './hooks/useReveal';
import { siteConfig } from './data/site';
import { buildWeeks, fmtUpdated, langColor, normalizeUrl } from './lib/github';
import { readmePreview } from './lib/markdown';
import type { GithubRepo, LangStat, RepoView } from './types';

function App() {
  const login = siteConfig.githubUsername.trim() || '05solar';
  const count = Math.max(3, Math.min(12, siteConfig.projectCount || 6));

  const [reloadKey, setReloadKey] = useState(0);
  const { user, repos, reposError, contrib, contribError, reload } = useGithub(login);

  // 제외 저장소를 빼고, 고정(pinned) 저장소를 맨 앞에, 나머지는 Star 순으로 정렬합니다.
  const ordered = useMemo(() => {
    const excluded = new Set(siteConfig.excludedRepos);
    const visible = repos.filter((r) => !excluded.has(r.name));
    const pinned = siteConfig.pinnedRepos
      .map((name) => visible.find((r) => r.name === name))
      .filter((r): r is GithubRepo => Boolean(r));
    const pinnedSet = new Set(pinned.map((r) => r.name));
    const others = visible
      .filter((r) => !pinnedSet.has(r.name))
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      );
    return [...pinned, ...others];
  }, [repos]);

  // README 존재 여부를 확인할 후보군 (호출 수 제한을 위해 약간 넉넉한 만큼만)
  const poolNames = useMemo(() => ordered.slice(0, count + 6).map((r) => r.name), [ordered, count]);
  const readmes = useReadmes(login, poolNames, reloadKey);

  // 데이터가 도착하면 새로 등장한 영역까지 다시 관찰합니다.
  useReveal(`${!!user}-${repos.length}-${!!contrib}`);

  const retry = () => {
    setReloadKey((k) => k + 1);
    reload();
  };

  const view = useMemo(() => {
    const name = siteConfig.displayName.trim() || user?.name || login;
    const tagline = siteConfig.tagline.trim() || '풀스택 개발자';
    const initial = (name || 'D').trim().charAt(0).toUpperCase();
    const pinnedSet = new Set(siteConfig.pinnedRepos);

    // 고정 저장소는 README가 없어도 노출하고, 그 외에는 README가 있는 것만 보여줍니다.
    const topRepos: RepoView[] = ordered
      .filter((r) => {
        const status = readmes[r.name]?.status;
        return pinnedSet.has(r.name) ? status === 'done' || status === 'missing' : status === 'done';
      })
      .slice(0, count)
      .map((r) => {
        const home = r.homepage && String(r.homepage).trim();
        const entry = readmes[r.name];
        const text = entry?.text || '';
        return {
          id: r.id,
          name: r.name,
          url: r.html_url,
          readmeText: text,
          readmeBase: entry?.baseUrl || '',
          preview:
            readmePreview(text) ||
            r.description ||
            'README는 등록되어 있지만 미리볼 설명이 없습니다. 카드를 눌러 전체 내용을 확인하세요.',
          language: r.language || '기타',
          langColor: langColor(r.language),
          stars: r.stargazers_count,
          forks: r.forks_count,
          updatedText: fmtUpdated(r.updated_at),
          topics: Array.isArray(r.topics) ? r.topics.slice(0, 6) : [],
          demoUrl: home ? normalizeUrl(home) : null,
        };
      });

    const poolPending =
      poolNames.length > 0 &&
      poolNames.some((n) => !readmes[n] || readmes[n].status === 'loading');
    const readmeErrored = poolNames.some((n) => readmes[n]?.status === 'error');

    // 언어 사용 비율은 전체 저장소 기준으로 집계합니다.
    const counts: Record<string, number> = {};
    repos.forEach((r) => {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
    });
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const totalLang = entries.reduce((acc, e) => acc + e[1], 0);
    const langStats: LangStat[] = entries.slice(0, 6).map(([n, c]) => {
      const pct = totalLang ? Math.round((c / totalLang) * 100) : 0;
      return { name: n, color: langColor(n), width: `${pct}%`, pctText: `${pct}%` };
    });

    const contribTotal = contrib
      ? (contrib.contributions || []).reduce((acc, d) => acc + d.count, 0)
      : null;
    const statContrib = contribTotal != null ? contribTotal.toLocaleString() : '—';
    const weeks = contrib ? buildWeeks(contrib.contributions || []) : [];

    const bio = user?.bio || '// 빠르게 배우고, 끝까지 책임지는 개발자';
    const email = siteConfig.email.trim() || user?.email || `${login}@gmail.com`;

    const blog = user?.blog && String(user.blog).trim();
    const blogUrl = blog ? normalizeUrl(blog) : `https://github.com/${login}`;
    const blogText = blog
      ? blog.replace(/^https?:\/\//, '')
      : user?.location || '블로그 / 웹사이트';
    const blogLabel = blog ? 'Website' : user?.location ? 'Location' : 'Website';

    const reposReady = repos.length > 0;
    const langReady = langStats.length > 0;
    const contribReady = !!contrib;

    return {
      name,
      tagline,
      initial,
      githubUrl: `https://github.com/${login}`,
      avatarUrl: `https://github.com/${login}.png?size=240`,
      bio,
      email,
      blogUrl,
      blogText,
      blogLabel,
      topRepos,
      langStats,
      statContrib,
      weeks,
      readmeErrored,
      showReposSkeleton:
        (!reposReady && !reposError) ||
        (reposReady && poolPending && topRepos.length === 0),
      showReposError: !reposReady && reposError,
      showReposEmpty: reposReady && !poolPending && topRepos.length === 0,
      langReady,
      showLangSkeleton: !langReady && !reposError,
      showLangError: !langReady && reposError && repos.length === 0,
      contribReady,
      showContribSkeleton: !contribReady && !contribError,
      showContribError: !contribReady && contribError,
    };
  }, [user, repos, reposError, contrib, contribError, readmes, ordered, poolNames, count, login]);

  return (
    <div className="page">
      <Nav name={view.name} initial={view.initial} />

      <Hero
        name={view.name}
        tagline={view.tagline}
        login={login}
        bioText={view.bio}
        githubUrl={view.githubUrl}
        avatarUrl={view.avatarUrl}
      />

      <TechStack
        langStats={view.langStats}
        langReady={view.langReady}
        showSkeleton={view.showLangSkeleton}
        showError={view.showLangError}
      />

      <Projects
        topRepos={view.topRepos}
        githubUrl={view.githubUrl}
        showSkeleton={view.showReposSkeleton}
        showError={view.showReposError}
        showEmpty={view.showReposEmpty}
        readmeErrored={view.readmeErrored}
        onRetry={retry}
      />

      <Activity
        statContrib={view.statContrib}
        weeks={view.weeks}
        contribReady={view.contribReady}
        showSkeleton={view.showContribSkeleton}
        showError={view.showContribError}
      />

      <Contact
        login={login}
        email={view.email}
        githubUrl={view.githubUrl}
        blogUrl={view.blogUrl}
        blogLabel={view.blogLabel}
        blogText={view.blogText}
      />

      <Footer name={view.name} login={login} />
    </div>
  );
}

export default App;
