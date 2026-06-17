import { useCallback, useEffect, useState } from 'react';
import { siteConfig } from '../data/site';
import type { ContribData, GithubRepo, GithubUser } from '../types';

export type GithubData = {
  user: GithubUser | null;
  repos: GithubRepo[];
  reposError: boolean;
  contrib: ContribData | null;
  contribError: boolean;
  reload: () => void;
};

// GitHub 공개 API에서 사용자/저장소/기여 데이터를 가져옵니다.
export function useGithub(username: string): GithubData {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [reposError, setReposError] = useState(false);
  const [contrib, setContrib] = useState<ContribData | null>(null);
  const [contribError, setContribError] = useState(false);
  const [token, setToken] = useState(0);

  const reload = useCallback(() => setToken((t) => t + 1), []);

  useEffect(() => {
    const u = username.trim();
    if (!u) return;
    let cancelled = false;
    setReposError(false);
    setContribError(false);

    fetch(`https://api.github.com/users/${u}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: GithubUser) => {
        if (!cancelled) setUser(data);
      })
      .catch(() => {});

    fetch(`https://api.github.com/users/${u}/repos?per_page=100&sort=updated`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: GithubRepo[]) => {
        if (!cancelled) {
          // fork는 제외하되, 고정(pinned) 저장소는 fork여도 남깁니다.
          const pinned = new Set(siteConfig.pinnedRepos);
          setRepos(
            (Array.isArray(data) ? data : []).filter((r) => !r.fork || pinned.has(r.name)),
          );
        }
      })
      .catch(() => {
        if (!cancelled) setReposError(true);
      });

    fetch(`https://github-contributions-api.jogruber.de/v4/${u}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: ContribData) => {
        if (!cancelled) setContrib(data);
      })
      .catch(() => {
        if (!cancelled) setContribError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [username, token]);

  return { user, repos, reposError, contrib, contribError, reload };
}
