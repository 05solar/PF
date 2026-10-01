import type { MouseEvent } from 'react';
import type { RepoView } from '../types';
import { renderMarkdown } from '../lib/markdown';
import { BookIcon, ChevronIcon } from './icons';

type RepoListItemProps = {
  repo: RepoView;
  // 아코디언: 열림 상태는 부모(Projects)가 관리합니다. 카드형과 동일한 openId를 공유합니다.
  open: boolean;
  onToggle: () => void;
};

// 리스트형 항목: 제목 · 핵심 기술 태그 · "README 자세히 보기" 버튼만 노출합니다.
export function RepoListItem({ repo, open, onToggle }: RepoListItemProps) {
  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className={`repo-row${open ? ' is-open' : ''}`}>
      <div className="repo-row-head">
        <a
          className="repo-row-name"
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={stop}
        >
          <BookIcon size={18} className="repo-name-icon" />
          <span>{repo.name}</span>
        </a>

        {repo.focus.length > 0 && (
          <div className="repo-row-focus">
            {repo.focus.map((f) => (
              <span key={f} className="repo-focus-chip">
                {f}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          className="repo-row-toggle"
          onClick={onToggle}
          aria-expanded={open}
        >
          <ChevronIcon size={16} className="repo-chevron" />
          {open ? 'README 접기' : 'README 자세히 보기'}
        </button>
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
  );
}
