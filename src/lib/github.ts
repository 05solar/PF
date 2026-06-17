import type { ContribDay } from '../types';

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Go: '#00ADD8',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  Shell: '#89e051',
  Vue: '#41b883',
  Dart: '#00B4AB',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B',
  Dockerfile: '#384d54',
};

export const langColor = (lang: string | null): string =>
  (lang && LANG_COLORS[lang]) || '#94a3b8';

export const fmtUpdated = (iso: string | null): string => {
  if (!iso) return '';
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')} 업데이트`;
};

export const normalizeUrl = (url: string): string =>
  url.startsWith('http') ? url : `https://${url}`;

// 저장소에 커밋된 이미지 파일 중 카드 대표 이미지로 쓸 한 장을 고릅니다.
export type TreeFile = { path: string; size: number };

const IMG_EXT = /\.(png|jpe?g|gif|webp|svg)$/i;

export function selectCoverPath(files: TreeFile[]): string | null {
  // favicon, vite 기본 로고는 대표 이미지에서 제외합니다.
  const usable = files.filter(
    (f) => IMG_EXT.test(f.path) && !/(^|\/)favicon|(^|\/)vite\.svg$/i.test(f.path),
  );
  if (!usable.length) return null;
  const score = (f: TreeFile): number => {
    const p = f.path.toLowerCase();
    let s = f.size || 0;
    // 스크린샷/프리뷰/문서 폴더 이미지는 크게 우대
    if (
      /(screenshot|preview|demo|banner|cover|hero|thumbnail|og[-_]?image|\/docs?\/|screenshots?\/)/.test(p)
    ) {
      s += 5_000_000;
    }
    // 아이콘/로고/심볼류는 감점
    if (/(icon|logo|symbol|sprite|emoji|badge)/.test(p)) s -= 3_000_000;
    if (/\.svg$/.test(p)) s -= 1_000_000;
    return s;
  };
  return [...usable].sort((a, b) => score(b) - score(a))[0].path;
}

// raw.githubusercontent.com 절대 URL (기본 브랜치 = HEAD)
export function rawUrl(login: string, name: string, path: string): string {
  const enc = path.split('/').map(encodeURIComponent).join('/');
  return `https://raw.githubusercontent.com/${login}/${name}/HEAD/${enc}`;
}

// GitHub README API가 돌려주는 base64 content를 UTF-8 문자열로 디코딩합니다.
export const decodeBase64 = (content: string): string => {
  try {
    const bin = atob(String(content || '').replace(/\n/g, ''));
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return '';
  }
};

// 기여 일자 배열을 주(week) 단위 7칸 그리드로 묶습니다. (일~토)
export const buildWeeks = (days: ContribDay[]): (ContribDay | null)[][] => {
  const weeks: (ContribDay | null)[][] = [];
  let week: (ContribDay | null)[] = new Array(7).fill(null);
  days.forEach((d) => {
    const wd = new Date(`${d.date}T00:00:00`).getDay();
    week[wd] = d;
    if (wd === 6) {
      weeks.push(week);
      week = new Array(7).fill(null);
    }
  });
  if (week.some((x) => x)) weeks.push(week);
  return weeks;
};
