import type { LangStat, RepoView } from '../types';
import { langColor } from '../lib/github';
import { detectStack } from '../lib/stack';
import { siteConfig } from './site';

// GitHub API 호출 한도(rate limit) 등으로 실시간 데이터를 못 받을 때 쓰는 저장본입니다.
// 프로젝트 카드와 언어 사용 비율이 항상 보이도록 최소 정보를 담아 둡니다.
// 이미지는 API가 아니라 raw.githubusercontent.com에서 오므로 한도와 무관하게 표시됩니다.
const login = siteConfig.githubUsername.trim() || '05solar';
const raw = (repo: string, path: string) =>
  `https://raw.githubusercontent.com/${login}/${repo}/HEAD/${path}`;

type FallbackDef = {
  name: string;
  language: string;
  image: string | null;
  demoUrl?: string | null;
};

// pinnedRepos 순서와 동일하게 유지합니다.
const DEFS: FallbackDef[] = [
  { name: 'checkmiteV1', language: 'TypeScript', image: raw('checkmiteV1', 'docs/screenshot.png') },
  {
    name: 'GO',
    language: 'TypeScript',
    image: raw('GO', 'docs/screenshot.png'),
    demoUrl: 'https://05solar.github.io/GO/',
  },
  {
    name: 'MSA-restaurant',
    language: 'Java',
    image: raw('MSA-restaurant', 'assets/customer.png'),
  },
  {
    name: 'GPT-Role-exp',
    language: 'Python',
    image: raw('GPT-Role-exp', 'docs/screenshot.png'),
  },
  {
    name: 'RAG-agent',
    language: 'Python',
    image: raw('RAG-agent', 'docs/assets/readme-preview.png'),
  },
  { name: 'MCP-shopbot', language: 'Python', image: raw('MCP-shopbot', 'assets/image.png') },
  { name: 'OV-clonecoding', language: 'JavaScript', image: null },
];

export const fallbackRepos: RepoView[] = DEFS.map((d, i) => {
  const desc = siteConfig.descriptions[d.name] || '';
  return {
    id: -1 - i, // 실시간 데이터와 겹치지 않도록 음수 id
    name: d.name,
    url: `https://github.com/${login}/${d.name}`,
    preview: desc || '프로젝트 소개는 GitHub 저장소에서 확인하세요.',
    // 오프라인 저장본이라 전체 README 원문은 없습니다. (카드에서 GitHub 링크 제공)
    readmeText: '',
    readmeBase: '',
    image: d.image,
    language: d.language,
    langColor: langColor(d.language),
    stars: 0,
    forks: 0,
    updatedText: '',
    stack: detectStack({ readme: desc, name: d.name, language: d.language }),
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
