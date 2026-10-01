import type { SiteConfig } from '../types';

// 사이트 전반에서 사용하는 설정값입니다.
// GitHub 사용자명만 바꾸면 저장소·언어·기여 그래프가 실시간으로 채워집니다.
export const siteConfig: SiteConfig = {
  githubUsername: '05solar',
  // 비워두면 GitHub 프로필의 이름(name)을 사용하고, 없으면 사용자명을 사용합니다.
  displayName: 'leeosolha',
  tagline: '풀스택 개발자',
  // 비워두면 GitHub 이메일 → '사용자명@gmail.com' 순으로 대체됩니다.
  email: 'lotus05f@gmail.com',
  // 링크드인 프로필 URL (비워두면 버튼이 표시되지 않습니다)
  linkedinUrl: 'https://www.linkedin.com/in/solha-lee-7a9127409/',
  // 보여줄 대표 저장소 개수 (3 ~ 12)
  projectCount: 10,
  // 대표 포트폴리오: 지정한 순서 그대로 고정 노출합니다 (fork여도 포함).
  pinnedRepos: [
    'checkmiteV1',
    'jbig',
    'GO',
    'MSA-restaurant',
    'By-Tomorrow',
    'GLML',
    'GMG',
    'RAG-agent',
    'MCP-shopbot',
    'OV-clonecoding',
    'Auto-PPT',
  ],
  // 프로젝트 카드에서 제외할 저장소
  // GMG: 05solar에도 동명 레포가 있어 실시간 데이터가 fallback(팀 조직 링크·커버)을
  //      덮어쓰며 커버가 사라지는 문제가 있어, 실시간 파이프라인에서만 제외합니다.
  //      (pinnedRepos에 남아 있어 fallback 카드로는 계속 노출됩니다.)
  excludedRepos: ['my-letter-site', 'PF', 'p2', 'portfolio', 'GMG'],
  // 각 프로젝트를 직접 요약한 소개 문구입니다. (README를 그대로 긁지 않고, 요점만 간결하게)
  descriptions: {
    checkmiteV1:
      'YOLO로 소형개체(천적응애)를 자동 분류·탐지하여 개체 수·밀도·활력도·증식률을 측정합니다.',
    jbig:
      '전북 외국인 근로자·유학생을 대상으로 공식문서를 기반으로 체류·행정과 노동 문제에 대한 챗봇 서비스와 함께, 서류를 넣으면 불법 요소 탐색과 서류 설명을 제공합니다.',
    GO: '브라우저에서 바로 두는 바둑·오목. 서버 없이 웹워커에서 MCTS·알파베타 AI가 3단계 난이도로 상대합니다.',
    'MSA-restaurant':
      '식당 서비스를 마이크로서비스로 구현한 프로젝트. JWT 게이트웨이와 Auth·Menu·Order·Review 서비스를 Docker Compose 한 번으로 띄웁니다.',
    'By-Tomorrow':
      '시험까지 남은 시간과 강의자료를 AI가 분석해 실현 가능한 벼락치기 커리큘럼을 짜 주는 서비스. 로그인 없이 8자리 코드로 접근합니다.',
    GLML: '조건(지역·동행·시간·메뉴)을 분석해 맛집을 추천하는 AI 에이전트. 판단→도구 호출→검토의 ReAct 흐름을 화면에 그대로 시각화합니다.',
    GMG: "'비선호'를 먼저 걸러 모두가 무난한 시간·장소·메뉴를 찾아 주는 모임 약속 서비스. 카카오맵으로 장소를 함께 고릅니다.",
    'RAG-agent':
      'PDF를 올려 내용을 묻는 RAG 챗봇에 졸업요건·도서추천·시설안내 에이전트를 더한 프로젝트. 답변 LLM과 평가 LLM 결과를 나란히 보여줍니다.',
    'MCP-shopbot':
      '상품 DB를 MCP로 연동한 한국어 쇼핑 도우미. Tool Calling으로 상품 검색·상세 조회·재고 확인을 처리합니다.',
    'OV-clonecoding':
      '올리브영 메인을 React로 구현한 클론 코딩. 카테고리 드로어·자동 캐러셀·상품 라우팅·반응형까지 커머스 UI 흐름을 재현했습니다.',
    'Auto-PPT':
      '문서를 넣으면 편집 가능한 PowerPoint(.pptx)를 자동 생성하는 로컬 웹앱. API 키 없이 로그인된 Claude Code·Codex CLI를 웹에서 구동합니다.',
  },
  // 프로젝트별 "핵심 기술" 태그 — 무엇이 중점인지 (기술 스택과 별도).
  focus: {
    checkmiteV1: ['CV', 'YOLO', 'Object Detection'],
    jbig: ['RAG', 'LLM', 'OCR', '다국어'],
    GO: ['Game AI', 'MCTS', 'Alpha-Beta'],
    'MSA-restaurant': ['MSA', 'JWT Auth', 'Docker'],
    'By-Tomorrow': ['LLM', '문서 분석'],
    GLML: ['AI Agent', 'ReAct', 'Tool Calling'],
    GMG: ['추천', '지도 API'],
    'RAG-agent': ['RAG', 'AI Agent', 'LLM'],
    'MCP-shopbot': ['MCP', 'Tool Calling', 'LLM'],
    'OV-clonecoding': ['Frontend', '반응형 UI'],
    'Auto-PPT': ['LLM', 'CLI 연동', '문서 자동화'],
  },
};

// 기술 스택 카드. 실제 사용하는 도구로 자유롭게 수정하세요.
export const techStack: { title: string; color: string; items: string[] }[] = [
  {
    title: '프론트엔드',
    color: '#4f46e5',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: '백엔드',
    color: '#2563eb',
    items: ['Node.js', 'NestJS', 'Python', 'Spring'],
  },
  {
    title: '데이터베이스',
    color: '#0ea5e9',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps · 인프라',
    color: '#6366f1',
    items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
  },
];
