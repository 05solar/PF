import type { Profile } from '../types';

export const profile: Profile = {
  name: '이솔하',
  nameEn: 'Solha Lee',
  role: 'Full-stack Developer',
  roleKo: '풀스택 개발자',
  intro:
    '전북대학교 IT정보공학과에서 웹, 백엔드, AI 도구 연결을 중심으로 프로젝트를 쌓아가고 있습니다.',
  longIntro:
    '최근에는 LLM과 외부 시스템을 연결하는 RAG, MCP, n8n 같은 도구로 지능형 워크플로를 만드는 일에 집중하고 있습니다. 화면에서 사용자가 만나는 흐름부터 데이터와 서버 설계까지 함께 다루는 것을 좋아합니다.',
  location: 'Jeonju, Korea',
  email: '05solar@jbnu.ac.kr',
  github: 'https://github.com/05solar',
  stack: {
    Frontend: ['React', 'Vite', 'TypeScript', 'Vue', 'CSS'],
    Backend: ['Node.js', 'FastAPI', 'Python', 'SQLite', 'Java'],
    AI: ['RAG', 'MCP', 'OpenAI API', 'n8n', 'LangChain'],
  },
};
