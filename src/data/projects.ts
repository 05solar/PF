import type { Project } from '../types';

const sampleSnippet = (label: string, title: string, tech: string) => ({
  label,
  lang: 'text',
  code: `${title}

Tech: ${tech}
Focus:
- 사용자 흐름을 먼저 정리하고 화면과 데이터 구조를 맞춘 프로젝트
- 배포와 유지보수를 고려해 저장소 단위로 기능을 분리
- README, 실행 흐름, 주요 기능을 기준으로 포트폴리오 카드 구성`,
});

export const projects: Project[] = [
  {
    id: 'mcp-shopbot',
    index: '01',
    title: 'MCP ShopBot',
    subtitle: 'MCP로 연결한 한국어 AI 쇼핑 어시스턴트',
    year: '2026',
    category: 'AI / Full-stack',
    description:
      '상품 데이터베이스를 Model Context Protocol(MCP) 서버로 연결하고, React/Vite 프론트엔드와 FastAPI 백엔드에서 OpenAI Tool Calling으로 상품 검색, 상세 조회, 재고 확인을 처리한 프로젝트입니다.',
    role: '프론트엔드 구현, MCP 서버 설계, API 연결',
    period: '2026',
    tech: ['JavaScript', 'React', 'Vite', 'FastAPI', 'MCP', 'OpenAI API', 'SQLite'],
    github: 'https://github.com/05solar/JBNU-lab3-MCP',
    demo: null,
    highlights: [
      'stdio 기반 MCP 서버와 채팅 UI를 분리해 도구 호출 흐름을 실험',
      '상품 검색, 상세 조회, 재고 확인 도구를 구현',
      'SSE 스트리밍 응답으로 대화형 UX를 구성',
    ],
    snippets: [
      {
        label: 'mcp_server_products.py',
        lang: 'python',
        code: `from mcp.server.fastmcp import FastMCP

mcp = FastMCP("products")

@mcp.tool()
def search_products(keyword: str):
    return {"query": keyword, "items": []}

if __name__ == "__main__":
    mcp.run(transport="stdio")`,
      },
    ],
  },
  {
    id: 'rag-lab',
    index: '02',
    title: 'JBNU RAG Lab',
    subtitle: '검색 증강 생성 파이프라인 실습',
    year: '2026',
    category: 'AI / Backend',
    description:
      '문서를 청크로 나누고 벡터 DB에 저장한 뒤, 사용자 질문과 가까운 근거를 찾아 답변을 생성하는 RAG 파이프라인입니다. 청크 크기, 검색 깊이, 근거 표시 방식에 따른 답변 품질을 비교했습니다.',
    role: 'RAG 파이프라인 설계 및 평가',
    period: '2026',
    tech: ['Python', 'LangChain', 'FAISS', 'OpenAI Embeddings', 'Streamlit'],
    github: 'https://github.com/05solar/JBNU-lab2-RAG',
    demo: null,
    highlights: [
      'Recursive splitter로 문서를 청크 단위로 분할',
      'top-k 검색과 근거 기반 프롬프트를 적용',
      '출처 표시를 통해 hallucination을 줄이는 방식 실험',
    ],
    snippets: [
      {
        label: 'rag_pipeline.py',
        lang: 'python',
        code: `def answer(query: str, index, llm):
    hits = index.similarity_search(query, k=4)
    context = "\\n---\\n".join(hit.page_content for hit in hits)
    return llm.invoke(f"근거만 사용해서 답하세요.\\n{context}\\n질문: {query}")`,
      },
    ],
  },
  {
    id: 'gpt-role',
    index: '03',
    title: 'GPT Role Experiment',
    subtitle: '역할 부여가 LLM 응답에 미치는 영향 실험',
    year: '2026',
    category: 'Research / OSS',
    description:
      '동일한 질문에 서로 다른 역할 프롬프트를 부여해 응답의 깊이, 어휘, 구조가 어떻게 달라지는지 비교한 오픈소스 과제 프로젝트입니다.',
    role: '프롬프트 설계, 응답 수집, 결과 분석',
    period: '2026',
    tech: ['Python', 'OpenAI API', 'Jupyter', 'pandas'],
    github: 'https://github.com/05solar/OSS_GPT-Role-exp',
    demo: null,
    highlights: [
      '역할별 동일 질문 세트를 구성해 응답 차이를 비교',
      '응답 길이와 키워드 빈도를 정리',
      '이슈와 PR 중심의 오픈소스 협업 흐름을 경험',
    ],
    snippets: [
      {
        label: 'experiment.py',
        lang: 'python',
        code: `roles = ["초등학생 선생님", "시니어 개발자", "카피라이터"]

for role in roles:
    print(role, ask(role, "함수가 뭐야?"))`,
      },
    ],
  },
  {
    id: 'handong-n8n',
    index: '04',
    title: '2025 Handong n8n',
    subtitle: '노코드 자동화 워크플로 실습',
    year: '2026',
    category: 'Automation',
    description:
      'Webhook, 외부 API, LLM 처리, Notion/Slack 연동까지 이어지는 n8n 자동화 워크플로를 설계한 프로젝트입니다.',
    role: '워크플로 설계 및 데모 구성',
    period: '2026',
    tech: ['n8n', 'Webhook', 'OpenAI API', 'Notion API', 'Slack API'],
    github: 'https://github.com/05solar/2025-handong-n8n',
    demo: null,
    highlights: [
      'Webhook 입력에서 LLM 요약과 Notion 기록까지 자동화',
      'Cron 기반 정기 실행 흐름을 실습',
      '비개발자도 이해 가능한 워크플로 구조를 정리',
    ],
    snippets: [sampleSnippet('workflow.json', '2025 Handong n8n', 'n8n, Webhook, OpenAI API')],
  },
  {
    id: 'cat-table',
    index: '05',
    title: 'CAT TABLE',
    subtitle: '고객용·관리자용 식당 MSA 프로젝트',
    year: '2026',
    category: 'MSA / Full-stack',
    description:
      '고객 웹과 관리자 웹을 Vue3로 분리하고 Java, Python, Docker Compose 기반으로 로컬에서 전체 서비스를 실행할 수 있게 구성한 식당 서비스 프로젝트입니다.',
    role: '프론트엔드 화면 구성, 서비스 구조 정리, Docker 실행 흐름 구성',
    period: '2026',
    tech: ['Vue', 'Java', 'CSS', 'Python', 'Docker'],
    github: 'https://github.com/05solar/OSS_project3',
    demo: null,
    highlights: [
      '고객용과 관리자용 서비스를 분리해 역할별 화면을 구성',
      'Docker Compose로 여러 서비스를 한 번에 실행하는 구조 정리',
      'MSA 관점에서 서비스 경계와 로컬 개발 흐름을 실습',
    ],
    snippets: [sampleSnippet('README.md', 'CAT TABLE', 'Vue, Java, Python, Docker')],
  },
  {
    id: 'lab1-chatbot',
    index: '06',
    title: 'ChatBot v1.0',
    subtitle: 'Windows 95 스타일 프롬프트 엔지니어링 실습 도구',
    year: '2026',
    category: 'AI / Frontend',
    description:
      'React + Vite + OpenAI API로 만든 대화형 챗봇입니다. temperature 비교, 시스템 프롬프트 비교, few-shot 분류, JSON 모드 파싱 같은 프롬프트 실험 기능을 제공합니다.',
    role: '챗봇 UI 구현, OpenAI API 연동, 프롬프트 실습 기능 구성',
    period: '2026',
    tech: ['React', 'Vite', 'JavaScript', 'OpenAI API', 'CSS'],
    github: 'https://github.com/05solar/JBNU-lab1-chatbot',
    demo: null,
    highlights: [
      '대화 히스토리와 토큰 사용량 표시를 포함한 채팅 탭 구현',
      'temperature 값을 동시에 비교하는 실습 UI 구성',
      'JSON 응답 파싱과 분기 처리를 통해 구조화 출력 실험',
    ],
    snippets: [sampleSnippet('prompt-lab.ts', 'ChatBot v1.0', 'React, Vite, OpenAI API')],
  },
  {
    id: 'pharmacy-finder',
    index: '07',
    title: 'Pharmacy Finder',
    subtitle: '공공 약국 정보와 Google Maps 기반 검색 서비스',
    year: '2026',
    category: 'Map / Full-stack',
    description:
      '공공 약국 정보 Open API와 Google Maps를 활용해 지역, 시군구, 운영 요일, 약국명으로 약국을 찾고 현재 위치 기준 영업중 약국을 지도와 리스트로 보여주는 웹 서비스입니다.',
    role: '검색 UI, 지도 마커, API 데이터 흐름 구성',
    period: '2026',
    tech: ['JavaScript', 'Python', 'Google Maps', 'Streamlit', 'SQLite', 'CSS'],
    github: 'https://github.com/05solar/OSS_pharmacy',
    demo: null,
    highlights: [
      '지역, 시군구, 요일, 기관명 기반 검색 필터 구성',
      '현재 위치 기준 5km 이내 영업중 약국 조회',
      'SQLite 캐시와 Streamlit 기반 백엔드 대시보드 구성',
    ],
    snippets: [sampleSnippet('pharmacy-search.js', 'Pharmacy Finder', 'JavaScript, Python, Google Maps')],
  },
  {
    id: 'japan-travel',
    index: '08',
    title: 'Japan Travel',
    subtitle: 'React + Vite 기반 여행 계획 웹 앱',
    year: '2026',
    category: 'Frontend',
    description:
      '일본 여행 정보를 정리하고 일정 중심으로 탐색할 수 있도록 만든 React/Vite 기반 웹 프로젝트입니다.',
    role: '화면 구조 설계, 컴포넌트 구현, 반응형 스타일링',
    period: '2026',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/05solar/japan-travel',
    demo: null,
    highlights: [
      '여행 콘텐츠를 카드형 UI로 정리',
      'Vite 기반 빠른 개발 환경 구성',
      '모바일에서도 읽기 쉬운 정보 배치 실험',
    ],
    snippets: [sampleSnippet('travel-app.jsx', 'Japan Travel', 'React, Vite, JavaScript')],
  },
  {
    id: 'wsd-01',
    index: '09',
    title: 'WSD 01',
    subtitle: '웹서비스 설계 과제 1',
    year: '2025',
    category: 'Coursework',
    description:
      '웹서비스 설계 수업의 첫 번째 과제로, HTML을 중심으로 기본 웹 문서 구조와 배포 흐름을 실습한 프로젝트입니다.',
    role: '과제 요구사항 구현 및 제출',
    period: '2025',
    tech: ['HTML'],
    github: 'https://github.com/05solar/WSD_01',
    demo: null,
    highlights: [
      '기본 HTML 문서 구조 작성',
      'GitHub 저장소 기반 제출 흐름 실습',
      '정적 웹 페이지의 기본 구성 이해',
    ],
    snippets: [sampleSnippet('index.html', 'WSD 01', 'HTML')],
  },
  {
    id: 'wsd-02-missing',
    index: '10',
    title: 'WSD 02',
    subtitle: '링크 확인이 필요한 웹서비스 설계 과제',
    year: '2025',
    category: 'Coursework',
    description:
      '요청 목록에 포함된 WSD_02 저장소입니다. 현재 공개 GitHub API에서는 404로 확인되어, 포트폴리오에는 확인 필요 상태로 기록했습니다.',
    role: '과제 프로젝트 정리',
    period: '2025',
    tech: ['Web Service Design'],
    github: 'https://github.com/05solar/WSD_02',
    demo: null,
    highlights: [
      '요청 목록에 맞춰 프로젝트 카드 추가',
      '현재 공개 저장소 조회에서는 접근 불가 상태',
      '추후 저장소명이 확인되면 링크만 교체 가능',
    ],
    snippets: [sampleSnippet('repository-check.txt', 'WSD 02', 'Repository link pending')],
  },
  {
    id: 'wsd-assignment-03',
    index: '11',
    title: 'WSD Assignment 03',
    subtitle: 'API 개발과 Swagger 실행 흐름 실습',
    year: '2024',
    category: 'Coursework / API',
    description:
      '크롤링 제한 이후 제공 데이터를 기반으로 API를 개발하고, 로컬 Swagger 실행과 서버 배포 과정에서 발생한 오류를 기록한 웹서비스 설계 과제입니다.',
    role: 'API 개발, Swagger 테스트, 배포 이슈 정리',
    period: '2024',
    tech: ['JavaScript', 'Swagger', 'API', 'JCloud'],
    github: 'https://github.com/05solar/WSD-Assignment-03',
    demo: null,
    highlights: [
      '제공 데이터를 기반으로 API 개발',
      '로컬 Swagger 실행 결과를 영상과 README로 정리',
      '서버 배포 과정의 HTTP 응답 오류를 기록',
    ],
    snippets: [sampleSnippet('api-assignment.js', 'WSD Assignment 03', 'JavaScript, Swagger')],
  },
  {
    id: 'wsd-assignment-02',
    index: '12',
    title: 'WSD Assignment 02',
    subtitle: '웹서비스 설계 과제 2',
    year: '2024',
    category: 'Coursework / Frontend',
    description:
      'JavaScript, CSS, HTML을 활용한 웹서비스 설계 과제입니다. 실행 영상과 함께 화면 구현 결과를 정리했습니다.',
    role: '프론트엔드 구현 및 결과 정리',
    period: '2024',
    tech: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/05solar/-WSD-Assignment-02',
    demo: null,
    highlights: [
      '과제 요구사항에 맞춘 웹 화면 구현',
      'CSS 기반 레이아웃과 상호작용 구성',
      '구동 영상을 README에 기록',
    ],
    snippets: [sampleSnippet('assignment-02.js', 'WSD Assignment 02', 'JavaScript, CSS, HTML')],
  },
  {
    id: 'coala-web',
    index: '13',
    title: 'COALA Official Website',
    subtitle: '전북대학교 COALA 동아리 공식 홈페이지',
    year: '2026',
    category: 'Frontend / Team',
    description:
      '전북대학교 컴퓨터인공지능학부 COALA 동아리의 공식 웹사이트입니다. 동아리 소개, 활동 내역, 프로젝트 소개를 위한 반응형 UI를 구성했습니다.',
    role: '팀 프로젝트 프론트엔드 유지보수 및 화면 개선',
    period: '2025 - 2026',
    tech: ['TypeScript', 'React', 'CSS', 'JavaScript', 'HTML'],
    github: 'https://github.com/JBNU-COALA/old_coala-web-fe',
    demo: 'https://coala.jbnu.ac.kr',
    highlights: [
      '동아리 소개와 활동 내역을 보여주는 공식 홈페이지 구성',
      '반응형 UI와 모던한 화면 스타일 적용',
      '팀 단위 저장소에서 협업 흐름 경험',
    ],
    snippets: [sampleSnippet('coala-page.tsx', 'COALA Official Website', 'TypeScript, React, CSS')],
  },
  {
    id: 'gmg-frontend',
    index: '14',
    title: 'GMG Frontend',
    subtitle: '음식·약속 기반 매칭 서비스 프론트엔드',
    year: '2026',
    category: 'Frontend / Team',
    description:
      '메인 페이지, Join 모달, 카테고리 페이지, 지도 마커, 시간 그리드 등 음식 모임 서비스의 프론트엔드 화면을 개선해온 팀 프로젝트입니다.',
    role: '프론트엔드 화면 개선, 지도 UI, 카테고리 흐름 정리',
    period: '2025 - 2026',
    tech: ['JavaScript', 'CSS', 'HTML', 'API Integration'],
    github: 'https://github.com/project-GMG/frontend',
    demo: null,
    highlights: [
      '메인 페이지 음식 컨테이너와 Join 모달 화면 개선',
      '지도 마커와 카테고리 페이지 UI 수정',
      'API 연결을 고려한 사진 박스와 리스트 구조 정리',
    ],
    snippets: [sampleSnippet('join-category.jsx', 'GMG Frontend', 'JavaScript, CSS, API')],
  },
  {
    id: 'gmg-github',
    index: '15',
    title: 'GMG Organization Profile',
    subtitle: '팀 저장소 프로필과 협업 메타 정보',
    year: '2025',
    category: 'Team / Documentation',
    description:
      'project-GMG 조직의 .github 저장소입니다. 팀 소개, 저장소 안내, 협업 문서 같은 조직 단위 메타 정보를 관리하는 공간입니다.',
    role: '조직 저장소 정리 및 팀 협업 문맥 관리',
    period: '2025',
    tech: ['GitHub', 'Markdown', 'Documentation'],
    github: 'https://github.com/project-GMG/.github',
    demo: null,
    highlights: [
      '조직 단위 저장소 프로필 관리',
      '팀 프로젝트의 문서화 기반 마련',
      '프론트엔드 저장소와 함께 협업 맥락 정리',
    ],
    snippets: [sampleSnippet('README.md', 'GMG Organization Profile', 'GitHub, Markdown')],
  },
];
