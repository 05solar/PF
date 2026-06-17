export type SiteConfig = {
  githubUsername: string;
  displayName: string;
  tagline: string;
  email: string;
  projectCount: number;
  // 항상 맨 앞에 노출할 저장소 이름 (fork여도 포함)
  pinnedRepos: string[];
  // 프로젝트 카드에서 제외할 저장소 이름
  excludedRepos: string[];
};

export type GithubUser = {
  name: string | null;
  login: string;
  public_repos: number;
  followers: number;
  bio: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
};

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  topics?: string[];
  fork: boolean;
};

export type ContribDay = {
  date: string;
  count: number;
  level: number;
};

export type ContribData = {
  contributions: ContribDay[];
};

// 화면에 바로 쓰기 좋게 가공한 대표 저장소 정보입니다.
// README가 있는 저장소만 이 형태로 만들어집니다.
export type RepoView = {
  id: number;
  name: string;
  url: string;
  preview: string; // README에서 뽑은 설명 미리보기
  readmeText: string; // 펼쳤을 때 보여줄 전체 README 원문
  language: string;
  langColor: string;
  stars: number;
  forks: number;
  updatedText: string;
  // README/토픽/언어에서 추정한 사용 기술 스택
  stack: string[];
  demoUrl: string | null;
  // README 안 상대경로 이미지를 절대 URL로 풀기 위한 기준 경로
  readmeBase: string;
  // README 안의 첫 이미지 (커버용, 없으면 null)
  image: string | null;
};

export type ReadmeStatus = 'loading' | 'done' | 'missing' | 'error';

export type ReadmeEntry = {
  status: ReadmeStatus;
  text: string;
  // README 파일이 위치한 raw 디렉터리 URL (상대 이미지 경로 해석용)
  baseUrl: string;
};

export type LangStat = {
  name: string;
  color: string;
  width: string;
  pctText: string;
};
