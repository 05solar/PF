// README / 설명 / 토픽 / 주 언어에서 사용 기술을 추정합니다. (LLM 없이 키워드 매칭)
type StackRule = { name: string; re: RegExp };

// 주의: 전역(g) 플래그는 test() 상태가 남아 버그가 되므로 절대 쓰지 않습니다.
const RULES: StackRule[] = [
  // 언어 (구분이 뚜렷한 것만; 모호한 Go/C 등은 주 언어로만 처리)
  { name: 'TypeScript', re: /\btypescript\b|\btsx\b/i },
  { name: 'JavaScript', re: /\bjavascript\b|\bes6\b/i },
  { name: 'Python', re: /\bpython\b/i },
  { name: 'Java', re: /\bjava\b/i },
  { name: 'Kotlin', re: /\bkotlin\b/i },
  { name: 'Swift', re: /\bswift\b/i },
  { name: 'Dart', re: /\bdart\b/i },
  { name: 'Ruby', re: /\bruby\b/i },
  { name: 'PHP', re: /\bphp\b/i },
  { name: 'C#', re: /\bc#|\bc\s?sharp\b/i },
  { name: 'C++', re: /\bc\+\+/i },
  { name: 'HTML', re: /\bhtml5?\b/i },
  { name: 'CSS', re: /\bcss3?\b/i },
  { name: 'Sass', re: /\bs[ac]ss\b/i },
  // 프론트엔드
  { name: 'React', re: /\breact\b/i },
  { name: 'Next.js', re: /\bnext\.?js\b/i },
  { name: 'Nuxt', re: /\bnuxt\b/i },
  { name: 'Vue', re: /\bvue\b/i },
  { name: 'Svelte', re: /\bsvelte\b/i },
  { name: 'Angular', re: /\bangular\b/i },
  { name: 'Vite', re: /\bvite\b/i },
  { name: 'Tailwind CSS', re: /\btailwind\b/i },
  { name: 'Redux', re: /\bredux\b/i },
  { name: 'Zustand', re: /\bzustand\b/i },
  { name: 'styled-components', re: /styled-components/i },
  { name: 'Streamlit', re: /\bstreamlit\b/i },
  // 백엔드
  { name: 'Node.js', re: /\bnode(\.?js)?\b/i },
  { name: 'Express', re: /\bexpress\b/i },
  { name: 'NestJS', re: /\bnest(\.?js)?\b/i },
  { name: 'FastAPI', re: /\bfastapi\b/i },
  { name: 'Flask', re: /\bflask\b/i },
  { name: 'Django', re: /\bdjango\b/i },
  { name: 'Spring Boot', re: /\bspring\s?boot\b/i },
  { name: 'Spring', re: /\bspring\b(?!\s?boot)/i },
  { name: 'GraphQL', re: /\bgraphql\b/i },
  // 데이터베이스
  { name: 'PostgreSQL', re: /\bpostgres(ql)?\b/i },
  { name: 'MySQL', re: /\bmysql\b/i },
  { name: 'MongoDB', re: /\bmongo(db)?\b/i },
  { name: 'Redis', re: /\bredis\b/i },
  { name: 'SQLite', re: /\bsqlite\b/i },
  { name: 'Supabase', re: /\bsupabase\b/i },
  { name: 'Firebase', re: /\bfirebase\b/i },
  { name: 'Prisma', re: /\bprisma\b/i },
  // AI
  { name: 'OpenAI API', re: /\bopenai\b/i },
  { name: 'LangChain', re: /\blangchain\b/i },
  { name: 'RAG', re: /\brag\b/i },
  { name: 'MCP', re: /\bmcp\b/i },
  { name: 'PyTorch', re: /\bpytorch\b/i },
  { name: 'TensorFlow', re: /\btensorflow\b/i },
  // DevOps / 도구
  { name: 'Docker', re: /\bdocker\b/i },
  { name: 'Kubernetes', re: /\bkubernetes\b|\bk8s\b/i },
  { name: 'AWS', re: /\baws\b/i },
  { name: 'Vercel', re: /\bvercel\b/i },
  { name: 'Netlify', re: /\bnetlify\b/i },
  { name: 'GitHub Actions', re: /\bgithub\s?actions\b/i },
  { name: 'Nginx', re: /\bnginx\b/i },
  { name: 'n8n', re: /\bn8n\b/i },
  { name: 'Swagger', re: /\bswagger\b/i },
  { name: 'Jupyter', re: /\bjupyter\b/i },
  { name: 'Kakao Map', re: /\bkakao\s?map\b/i },
  { name: 'Google Maps', re: /\bgoogle\s?maps\b/i },
];

export function detectStack(input: {
  readme?: string;
  description?: string | null;
  name?: string;
  language?: string | null;
  topics?: string[];
}): string[] {
  const hay = [
    input.readme || '',
    input.description || '',
    (input.name || '').replace(/[-_]/g, ' '),
    (input.topics || []).join(' '),
  ].join('\n');

  const seen = new Set<string>();
  const found: string[] = [];
  const add = (n: string) => {
    if (!seen.has(n)) {
      seen.add(n);
      found.push(n);
    }
  };

  // 주 언어(GitHub 분류)를 가장 먼저 넣습니다.
  if (input.language) add(input.language);
  for (const rule of RULES) {
    if (rule.re.test(hay)) add(rule.name);
  }
  return found.slice(0, 8);
}
