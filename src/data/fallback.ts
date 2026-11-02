import type { LangStat, RepoView } from '../types';
import { langColor } from '../lib/github';
import { detectStack } from '../lib/stack';
import { siteConfig } from './site';
import { bundledReadmes } from './readmes';
import { localCovers } from './covers';

// GitHub API 호출 한도(rate limit) 등으로 실시간 데이터를 못 받을 때 쓰는 저장본입니다.
// 프로젝트 카드와 언어 사용 비율이 항상 보이도록 최소 정보를 담아 둡니다.
// 커버 이미지는 전부 로컬 저장본(covers.ts)을 써서 네트워크 상태와 무관하게 표시됩니다.
const login = siteConfig.githubUsername.trim() || '05solar';

type FallbackDef = {
  name: string;
  language: string;
  demoUrl?: string | null;
  // 다른 계정/조직 저장소일 때 링크를 직접 지정합니다 (비우면 05solar 기준).
  url?: string;
};

// pinnedRepos 순서와 동일하게 유지합니다. (커버 이미지는 covers.ts의 로컬 저장본)
const DEFS: FallbackDef[] = [
  { name: 'checkmiteV1', language: 'TypeScript' },
  { name: 'jbig', language: 'Python' },
  // 프라이빗 저장소 → url: '' (GitHub 링크·버튼을 숨깁니다)
  { name: 'edu-msa', language: 'TypeScript', url: '' },
  {
    name: 'GO',
    language: 'TypeScript',
    demoUrl: 'https://05solar.github.io/GO/',
  },
  { name: 'MSA-restaurant', language: 'Java' },
  { name: 'By-Tomorrow', language: 'Java' },
  { name: 'GLML', language: 'TypeScript' },
  {
    name: 'GMG',
    language: 'Java',
    url: 'https://github.com/project-GMG',
  },
  { name: 'RAG-agent', language: 'Python' },
  { name: 'MCP-shopbot', language: 'Python' },
  { name: 'OV-clonecoding', language: 'JavaScript' },
  { name: 'Auto-PPT', language: 'Python' },
];

export const fallbackRepos: RepoView[] = DEFS.map((d, i) => {
  const desc = siteConfig.descriptions[d.name] || '';
  // 사이트에 내장한 README를 그대로 사용합니다. (GitHub API 호출 없음)
  const readme = bundledReadmes[d.name];
  return {
    id: -1 - i, // 실시간 데이터와 겹치지 않도록 음수 id
    name: d.name,
    // url이 ''(빈 문자열)이면 그대로 둬 GitHub 링크를 숨깁니다. (undefined일 때만 기본 경로)
    url: d.url ?? `https://github.com/${login}/${d.name}`,
    preview: desc || '프로젝트 소개는 GitHub 저장소에서 확인하세요.',
    readmeText: readme?.text || '',
    readmeBase: readme?.baseUrl || '',
    image: localCovers[d.name] ?? null,
    language: d.language,
    langColor: langColor(d.language),
    stars: 0,
    forks: 0,
    updatedText: '',
    stack: detectStack({ readme: desc, name: d.name, language: d.language }),
    focus: siteConfig.focus[d.name] || [],
    demoUrl: d.demoUrl ?? null,
  };
});

// 전체 저장소 기준 언어 사용 비율의 대표 저장본입니다.
export const fallbackLangStats: LangStat[] = [
  { name: 'TypeScript', pct: 30 },
  { name: 'JavaScript', pct: 28 },
  { name: 'Python', pct: 22 },
  { name: 'HTML', pct: 9 },
  { name: 'CSS', pct: 7 },
  { name: 'Java', pct: 4 },
].map(({ name, pct }) => ({
  name,
  color: langColor(name),
  width: `${pct}%`,
  pctText: `${pct}%`,
}));
