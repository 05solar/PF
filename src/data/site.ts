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
  projectCount: 11,
  // 대표 포트폴리오: 지정한 순서 그대로 고정 노출합니다 (fork여도 포함).
  pinnedRepos: [
    'checkmiteV1',
    'jbig',
    'edu-msa',
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
  excludedRepos: ['my-letter-site', 'PF', 'p2', 'portfolio', 'GMG', 'edu-msa'],
  // 각 프로젝트를 직접 요약한 소개 문구입니다. (README를 그대로 긁지 않고, 요점만 간결하게)
  descriptions: {
    checkmiteV1:
      'YOLO로 소형개체(천적응애)를 자동 분류·탐지하여 개체 수·밀도·활력도·증식률을 측정합니다.',
    jbig:
      '전북 외국인 근로자·유학생을 대상으로 공식문서를 기반으로 체류·행정과 노동 문제에 대한 챗봇 서비스와 함께, 서류를 넣으면 불법 요소 탐색과 서류 설명을 제공합니다.',
    'edu-msa':
      '교육청 직원이 단기 교육에서 만든 프로그램을 내부 저장소에 올리면, 표준 규격만 지키면 자동으로 하나의 MSA 서비스로 띄워 바로 쓸 수 있게 하는 사내 포털입니다. React·Spring Boot 3·MariaDB·Kubernetes로 구성한 단독 프로젝트입니다.',
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
  // 프로젝트별 "핵심 기술" 배지 — [분야, 활용] 쌍. 왼쪽은 분야, 오른쪽은 사용 기술/활용명.
  focus: {
    checkmiteV1: [['CV', 'YOLO Object Detection']],
    jbig: [
      ['RAG', '공식문서 검색'],
      ['LLM', '다국어 챗봇'],
      ['OCR', '서류 분석'],
    ],
    GO: [
      ['Board Game', '바둑 · 오목'],
      ['AI', 'MCTS · Alpha-Beta'],
    ],
    'MSA-restaurant': [
      ['MSA', 'Spring Cloud Gateway'],
      ['Auth', 'JWT'],
      ['Infra', 'Docker Compose'],
    ],
    'By-Tomorrow': [
      ['LLM', 'Gemini'],
      ['AI', '문서 분석'],
    ],
    GLML: [
      ['AI Agent', 'ReAct'],
      ['LLM', 'Tool Calling'],
    ],
    GMG: [
      ['추천', '비선호 필터'],
      ['Map', 'Kakao API'],
    ],
    'RAG-agent': [
      ['RAG', 'PDF QA'],
      ['AI Agent', 'DB 상담'],
    ],
    'MCP-shopbot': [
      ['MCP', 'Tool Calling'],
      ['LLM', '쇼핑 도우미'],
    ],
    'OV-clonecoding': [
      ['Frontend', 'React'],
      ['UI', '반응형'],
    ],
    'Auto-PPT': [
      ['LLM', '슬라이드 생성'],
      ['CLI', 'Claude Code · Codex'],
    ],
    // edu-msa는 focus 맵 맨 뒤에 둡니다. (MSA·Infra·Auth는 이미 앞에서 색이 정해져 재사용)
    'edu-msa': [
      ['MSA', '서비스 자동 배포'],
      ['Infra', 'Kubernetes'],
      ['Auth', 'JWT'],
    ],
  },
};

// 핵심 기술 배지의 오른쪽(활용) 포인트 색상 팔레트 (서로 다른 색 17종).
export const focusColors = [
  '#C0392B',
  '#C2410C',
  '#A16207',
  '#15803D',
  '#0F766E',
  '#2563EB',
  '#4F46E5',
  '#8E44AD',
  '#C2185B',
  '#5C6F2B',
  '#3B4953',
  '#FF84BA',
  '#FF6B35',
  '#744577',
  '#A98B76',
  '#3291B6',
  '#B77466',
];

// 모든 분야를 "처음 등장한 순서"로 모아 팔레트 색을 하나씩 겹치지 않게 배정합니다.
// → 서로 다른 분야는 서로 다른 색을 쓰고, 같은 분야(예: 'LLM')는 어디서나 같은 색을 씁니다.
const fieldColorMap: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  let idx = 0;
  for (const badges of Object.values(siteConfig.focus)) {
    for (const [field] of badges) {
      if (!(field in map)) {
        map[field] = focusColors[idx % focusColors.length];
        idx += 1;
      }
    }
  }
  return map;
})();

export function focusColor(field: string): string {
  return fieldColorMap[field] ?? focusColors[0];
}

// 배경색 위에서 더 잘 보이는 글씨색(흰/검정)을 WCAG 대비로 골라 줍니다.
// → 밝은 포인트 색(핑크·주황 등)에는 어두운 글씨가 들어갑니다.
export function readableText(hex: string): string {
  const h = hex.replace('#', '');
  const toLin = (v: number) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  const r = toLin(parseInt(h.slice(0, 2), 16) / 255);
  const g = toLin(parseInt(h.slice(2, 4), 16) / 255);
  const b = toLin(parseInt(h.slice(4, 6), 16) / 255);
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const contrastWhite = 1.05 / (L + 0.05);
  const contrastBlack = (L + 0.05) / 0.05;
  return contrastWhite >= contrastBlack ? '#fff' : '#1f2937';
}

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
