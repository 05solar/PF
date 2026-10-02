import { useEffect, useRef } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { RepoView } from '../types';
import { renderMarkdown } from '../lib/markdown';
import { focusColor, readableText } from '../data/site';
import { FocusIcon } from './focusIcons';
import { BookIcon, ChevronIcon, ExternalIcon } from './icons';

type RepoCardProps = {
  repo: RepoView;
  // 아코디언: 열림 상태는 부모가 관리합니다 (항상 하나만 펼쳐지도록).
  open: boolean;
  onToggle: () => void;
};

export function RepoCard({ repo, open, onToggle }: RepoCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  // 카드를 펼치면 (그리드 재배치로 아래 행에 내려갈 수 있으므로) 카드 상단으로 자동 스크롤
  useEffect(() => {
    if (!open) return;
    const el = cardRef.current;
    if (!el) return;
    const frame = requestAnimationFrame(() => {
      // FLIP 역변환(transform)에 영향받지 않는 레이아웃 기준 위치를 offsetTop으로 계산
      let top = 0;
      let node: HTMLElement | null = el;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      const navH =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 66;
      window.scrollTo({ top: Math.max(0, top - navH - 16), behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [open]);

  // 카드 안의 링크를 누를 때는 카드가 접히지 않도록 전파를 막습니다.
  const stop = (e: MouseEvent) => e.stopPropagation();
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`repo${open ? ' is-open' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={onKeyDown}
    >
      <div className="repo-accent" />
      <div className="repo-body">
        {repo.image && (
          <div className="repo-cover">
            <img src={repo.image} alt={`${repo.name} 미리보기`} loading="lazy" />
          </div>
        )}
        <div className="repo-top">
          <a
            className="repo-name"
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
          >
            <BookIcon size={19} className="repo-name-icon" />
            <span>{repo.name}</span>
          </a>
          <div className="repo-stats">
            <span className="repo-stat">
              <span className="repo-lang-dot" style={{ background: repo.langColor }} />
              {repo.language}
            </span>
            <span className="repo-stat">★ {repo.stars}</span>
            <span className="repo-stat">⑂ {repo.forks}</span>
          </div>
        </div>

        <div className="repo-eyebrow">프로젝트 소개</div>
        <p className="repo-desc">{repo.preview}</p>

        {repo.focus.length > 0 && (
          <div className="repo-focus">
            {repo.focus.map(([field, value]) => (
              <span key={`${field}-${value}`} className="repo-focus-badge">
                <span className="repo-focus-key">
                  <FocusIcon field={field} />
                  {field}
                </span>
                <span
                  className="repo-focus-val"
                  style={{ background: focusColor(field), color: readableText(focusColor(field)) }}
                >
                  {value}
                </span>
              </span>
            ))}
          </div>
        )}

        {repo.stack.length > 0 && (
          <div className="repo-stack-section">
            <div className="repo-eyebrow">기술 스택</div>
            <div className="repo-stack">
              {repo.stack.map((s) => (
                <span key={s} className="repo-stack-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="repo-actions">
          <span className="repo-toggle">
            <ChevronIcon size={16} className="repo-chevron" />
            {open ? 'README 접기' : 'README 자세히 보기'}
          </span>
          {repo.demoUrl && (
            <a
              className="btn btn-outline"
              href={repo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stop}
            >
              <ExternalIcon size={15} className="icon-green" />
              데모 사이트
            </a>
          )}
          <a
            className="btn btn-soft"
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
          >
            깃허브 바로가기 →
          </a>
          <span className="repo-updated">{repo.updatedText}</span>
        </div>

        <div className="repo-readme-wrap" onClick={stop}>
          <div className="repo-readme-inner">
            <div className="repo-readme">
              <div className="repo-eyebrow">README · 코드 설명</div>
              {repo.readmeText.trim() ? (
                <div className="readme-box">{renderMarkdown(repo.readmeText, repo.readmeBase)}</div>
              ) : (
                <p className="readme-error">
                  README 내용을 표시할 수 없습니다.{' '}
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" onClick={stop}>
                    GitHub에서 보기 →
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
