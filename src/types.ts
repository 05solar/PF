export type CodeSnippet = {
  label: string;
  lang: string;
  code: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  role: string;
  period: string;
  tech: string[];
  github: string;
  demo?: string | null;
  highlights: string[];
  snippets: CodeSnippet[];
};

export type Profile = {
  name: string;
  nameEn: string;
  role: string;
  roleKo: string;
  intro: string;
  longIntro: string;
  location: string;
  email: string;
  github: string;
  stack: Record<string, string[]>;
};
