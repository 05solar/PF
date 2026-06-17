import type { ReactNode } from 'react';

// README에서 제목·배지·이미지를 건너뛰고 첫 설명 문단만 뽑아 ~2줄 요약으로 씁니다.
// (실제 2줄 자르기는 CSS line-clamp가 마무리합니다.)
export function readmePreview(md: string, maxLen = 220): string {
  const lines = String(md || '').replace(/\r/g, '').split('\n');
  const parts: string[] = [];
  let inFence = false;
  for (const raw of lines) {
    const t = raw.trim();
    if (/^```/.test(t)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!t) {
      if (parts.length) break; // 첫 문단까지만
      continue;
    }
    if (/^#{1,6}\s/.test(t)) continue; // 제목/헤딩
    if (/^[-=*_]{3,}$/.test(t)) continue; // 구분선
    // 이미지/배지/HTML만 있는 줄은 건너뜀
    const noImg = t
      .replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/<[^>]+>/g, '')
      .trim();
    if (!noImg) continue;
    parts.push(noImg);
  }

  const text = parts
    .join(' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 링크 → 텍스트
    .replace(/^\s*[-*+]\s+/g, '')
    .replace(/[*_>#`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen).replace(/\s+\S*$/, '').trimEnd()}…`;
}

// README 본문에 쓰이는 아주 가벼운 마크다운 → React 노드 변환기입니다.
// 정식 파서가 아니라, 자주 쓰는 문법만 안전하게 렌더링합니다.

// 상대경로(예: ./docs/a.png, assets/b.png)를 GitHub raw 절대 URL로 변환합니다.
export function resolveAssetUrl(src: string, base: string): string {
  const s = String(src || '').trim();
  if (!s) return '';
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith('//')) return `https:${s}`;
  if (!base) return s;
  try {
    return new URL(s, base).href;
  } catch {
    return s;
  }
}

// README 본문에서 첫 번째 이미지 URL을 뽑아 카드 커버로 씁니다. (shields 등 배지는 건너뜀)
export function firstReadmeImage(md: string, base = ''): string | null {
  const text = String(md || '');
  const found: { idx: number; src: string }[] = [];
  let m: RegExpExecArray | null;
  const mdRe = /!\[[^\]]*\]\(\s*([^)\s]+)[^)]*\)/g;
  while ((m = mdRe.exec(text))) found.push({ idx: m.index, src: m[1] });
  const htmlRe = /<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
  while ((m = htmlRe.exec(text))) found.push({ idx: m.index, src: m[1] });
  if (!found.length) return null;
  found.sort((a, b) => a.idx - b.idx);
  const isBadge = (s: string) =>
    /shields\.io|img\.shields|\bbadge\b|flat-square|circleci|codecov|coveralls|travis|\/workflows\/|actions\/workflow|badgen|forthebadge/i.test(
      s,
    );
  const pick = found.find((f) => !isBadge(f.src)) || found[0];
  return resolveAssetUrl(pick.src, base);
}

export function renderInline(input: string, base = ''): ReactNode[] {
  const text = String(input);
  // 순서 중요: 링크된 이미지 → 이미지 → 코드 → 굵게 → 링크 → 기울임
  const re =
    /(\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\))|(!\[[^\]]*\]\([^)]*\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))|(\*[^*]+\*)|(_[^_]+_)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('[![')) {
      const mm = /\[!\[([^\]]*)\]\(([^)]*)\)\]\(([^)]*)\)/.exec(tok);
      if (mm) {
        nodes.push(
          <a key={key++} href={mm[3]} target="_blank" rel="noopener noreferrer">
            <img className="md-img" src={resolveAssetUrl(mm[2], base)} alt={mm[1]} loading="lazy" />
          </a>,
        );
      }
    } else if (tok.startsWith('![')) {
      const mm = /!\[([^\]]*)\]\(([^)]*)\)/.exec(tok);
      if (mm) {
        nodes.push(
          <img
            key={key++}
            className="md-img"
            src={resolveAssetUrl(mm[2], base)}
            alt={mm[1]}
            loading="lazy"
          />,
        );
      }
    } else if (tok[0] === '`') {
      nodes.push(
        <code key={key++} className="md-code">
          {tok.slice(1, -1)}
        </code>,
      );
    } else if (tok.slice(0, 2) === '**') {
      nodes.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    } else if (tok[0] === '[') {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok);
      if (mm) {
        nodes.push(
          <a key={key++} href={mm[2]} target="_blank" rel="noopener noreferrer">
            {mm[1]}
          </a>,
        );
      }
    } else {
      nodes.push(<em key={key++}>{tok.slice(1, -1)}</em>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderMarkdown(md: string, base = ''): ReactNode {
  const cleaned = String(md || '')
    .replace(/<!--[\s\S]*?-->/g, '')
    // HTML <img> 태그를 마크다운 이미지로 변환해서 살려둡니다.
    .replace(/<img\b[^>]*>/gi, (tag) => {
      const src = (/\bsrc\s*=\s*["']([^"']+)["']/i.exec(tag) || [])[1] || '';
      const alt = (/\balt\s*=\s*["']([^"']*)["']/i.exec(tag) || [])[1] || '';
      return src ? `\n\n![${alt}](${src})\n\n` : '';
    })
    // <picture>/<source> 래퍼는 제거 (위에서 살린 <img> fallback만 사용)
    .replace(/<picture\b[^>]*>|<\/picture>|<source\b[^>]*>/gi, '')
    .replace(/<\/?[a-z][^>]*>/gi, '');
  const lines = cleaned.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;
  const isTableSep = (l: string) => /\|/.test(l) && /^[\s|:\-]+$/.test(l);

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*```/.test(line)) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      blocks.push(
        <pre key={key++} className="md-pre">
          {buf.join('\n')}
        </pre>,
      );
      continue;
    }

    const hm = /^(#{1,6})\s+(.*)$/.exec(line);
    if (hm) {
      const lvl = hm[1].length;
      const Tag = lvl <= 2 ? 'h3' : 'h4';
      blocks.push(
        <Tag key={key++} className={`md-h md-h${lvl}`}>
          {renderInline(hm[2], base)}
        </Tag>,
      );
      i++;
      continue;
    }

    if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) {
      blocks.push(<hr key={key++} className="md-hr" />);
      i++;
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*+]\s+/, ''));
        i++;
      }
      blocks.push(
        <ul key={key++} className="md-ul">
          {items.map((it, ii) => (
            <li key={ii}>{renderInline(it, base)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol key={key++} className="md-ol">
          {items.map((it, ii) => (
            <li key={ii}>{renderInline(it, base)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    if (/^\s*>/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*>\s?/, ''));
        i++;
      }
      blocks.push(
        <blockquote key={key++} className="md-quote">
          {renderInline(buf.join(' '), base)}
        </blockquote>,
      );
      continue;
    }

    if (/^\s*$/.test(line) || isTableSep(line)) {
      i++;
      continue;
    }

    const buf = [line];
    i++;
    while (
      i < lines.length &&
      !/^\s*$/.test(lines[i]) &&
      !/^\s*#{1,6}\s/.test(lines[i]) &&
      !/^\s*```/.test(lines[i]) &&
      !/^\s*[-*+]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^\s*>/.test(lines[i]) &&
      !isTableSep(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={key++} className="md-p">
        {renderInline(buf.join(' '), base)}
      </p>,
    );
  }

  const capped = blocks.slice(0, 70);
  if (blocks.length > 70) {
    capped.push(
      <p key="more" className="md-more">
        … 전체 내용은 GitHub에서 확인하세요.
      </p>,
    );
  }
  return <div className="md">{capped}</div>;
}
