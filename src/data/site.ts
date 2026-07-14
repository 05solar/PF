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
  // 보여줄 대표 저장소 개수 (3 ~ 12)
  projectCount: 7,
  // 대표 포트폴리오: 지정한 순서 그대로 고정 노출합니다 (fork여도 포함).
  pinnedRepos: [
    'checkmiteV1',
    'GO',
    'MSA-restaurant',
    'GPT-Role-exp',
    'RAG-agent',
    'MCP-shopbot',
    'OV-clonecoding',
  ],
  // 프로젝트 카드에서 제외할 저장소
  excludedRepos: ['my-letter-site', 'PF', 'p2', 'portfolio'],
  // 각 프로젝트 README를 읽고 직접 정리한 소개 문구입니다.
  // (README 첫 줄을 그대로 자르지 않고, 프로젝트 성격이 드러나도록 요약)
  descriptions: {
    checkmiteV1:
      'YOLO 기반 이미지·영상 분석으로 천적응애를 자동 탐지해 개체 수·밀도·활력도·증식률을 측정하는 로컬 실행형 사육 품질 관리 대시보드입니다. React·Express·FastAPI로 구성했습니다.',
    GO: '브라우저에서 바로 즐기는 바둑(9×9·13×13)·오목(15×15) 게임입니다. 서버 없이 동작하며, 웹워커에서 바둑은 MCTS, 오목은 알파-베타 AI가 3단계 난이도로 대국합니다.',
    'MSA-restaurant':
      '고객·관리자용 식당 서비스를 마이크로서비스로 구현한 프로젝트입니다. Spring Boot 게이트웨이(JWT 인증)와 Auth·Menu·Order·Review 서비스, FastAPI AI 서비스를 Docker Compose 한 번으로 실행합니다.',
    'GPT-Role-exp':
      '프롬프트 역할 부여(role assignment)의 효과를 단계별로 배우는 OpenAI API 교육용 패키지입니다. 역할 유무 비교부터 다중 역할 파이프라인까지 파일 1개 완결형 레슨 15개로 구성했습니다.',
    'RAG-agent':
      'PDF를 업로드해 문서 내용을 질문하는 RAG 챗봇에, 졸업 요건 상담·도서 추천·교내 시설 안내 등 SQLite DB 기반 에이전트 탭을 더한 실습 프로젝트입니다. 답변 LLM과 평가 LLM 결과를 함께 보여줍니다.',
    'MCP-shopbot':
      '상품 데이터베이스를 MCP(Model Context Protocol)로 연동한 한국어 AI 쇼핑 도우미입니다. FastAPI·React 구성으로, OpenAI Tool Calling을 통해 상품 검색·상세 조회·재고 확인을 처리합니다.',
    'OV-clonecoding':
      '올리브영 메인 페이지를 React·Vite로 구현한 클론 코딩 과제입니다. 카테고리 드로어, 자동 슬라이드 캐러셀, 상품 상세 라우팅, 반응형 레이아웃까지 실제 커머스 UI 흐름을 재현했습니다.',
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
