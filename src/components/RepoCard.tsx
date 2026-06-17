import { useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { RepoView } from '../types';
import { renderMarkdown } from '../lib/markdown';
import { BookIcon, ChevronIcon, ExternalIcon } from './icons';

type RepoCardProps = {
  repo: RepoView;
};

export function RepoCard({ repo }: RepoCardProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  // 카드 안의 링크를 누를 때는 카드가 접히지 않도록 전파를 막습니다.
  const stop = (e: MouseEvent) => e.stopPropagation();
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <article
      className={`repo${open ? ' is-open' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className="repo-accent" style={{ background: repo.langColor }} />
      <div className="repo-body">
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

        <div className="repo-eyebrow">README 미리보기</div>
        <p className="repo-desc">{repo.preview}</p>

        {repo.topics.length > 0 && (
          <div className="repo-topics">
            {repo.topics.map((t) => (
              <span key={t} className="repo-topic">
                {t}
              </span>
            ))}
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
