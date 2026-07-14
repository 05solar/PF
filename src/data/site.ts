import type { SiteConfig } from '../types';

// 사이트 전반에서 사용하는 설정값입니다.
// GitHub 사용자명만 바꾸면 저장소·언어·기여 그래프가 실시간으로 채워집니다.
export const siteConfig: SiteConfig = {
  githubUsername: '05solar',
  // 비워두면 GitHub 프로필의 이름(name)을 사용하고, 없으면 사용자명을 사용합니다.
  displayName: '',
  tagline: '풀스택 개발자',
  // 비워두면 GitHub 이메일 → '사용자명@gmail.com' 순으로 대체됩니다.
  email: '',
  // 보여줄 대표 저장소 개수 (3 ~ 12)
  projectCount: 7,
  // 대표 포트폴리오: 지정한 순서 그대로 고정 노출합니다 (fork여도 포함).
  pinnedRepos: [
    'checkmiteV1',
    'GO',
    'MSA-restaurant',
    'OSS_GPT-Role-exp',
    'JBNU-lab2-RAG',
    'JBNU-lab3-MCP',
    'OV-clonecoding',
  ],
  // 프로젝트 카드에서 제외할 저장소
  excludedRepos: ['my-letter-site', 'PF', 'p2', 'portfolio'],
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
