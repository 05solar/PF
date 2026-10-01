import { useState } from 'react';
import type { RepoView } from '../types';
import { useFlipList } from '../hooks/useFlipList';
import { RepoCard } from './RepoCard';

type ProjectsProps = {
  topRepos: RepoView[];
  githubUrl: string;
  showSkeleton: boolean;
  showError: boolean;
  showEmpty: boolean;
  readmeErrored: boolean;
  onRetry: () => void;
};

export function Projects({
  topRepos,
  githubUrl,
  showSkeleton,
  showError,
  showEmpty,
  readmeErrored,
  onRetry,
}: ProjectsProps) {
  const { listRef, captureFlip } = useFlipList<HTMLDivElement>();
  // 아코디언: 한 번에 하나의 카드만 펼칩니다. (열린 카드 id, 없으면 null)
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    // 레이아웃이 바뀌기 전 위치를 먼저 스냅샷해 FLIP으로 부드럽게 이동시킵니다.
    captureFlip();
    setOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <section id="projects" className="section-full projects">
      <div className="projects-inner">
        <div className="projects-head" data-reveal>
          <div>
            <span className="eyebrow">PROJECTS</span>
            <h2 className="section-title">포트폴리오</h2>
            <p className="section-desc">
              README가 등록된 저장소만 모았습니다. 카드를 누르면 펼쳐지며 전체 README와 코드 설명을
              볼 수 있어요.
            </p>
          </div>
          <a className="projects-all" href={githubUrl} target="_blank" rel="noopener noreferrer">
            전체 저장소 →
          </a>
        </div>

        {topRepos.length > 0 && (
          <div className="repo-list" ref={listRef}>
            {topRepos.map((repo) => (
              <RepoCard
                key={repo.id}
                repo={repo}
                open={openId === repo.id}
                onToggle={() => toggleCard(repo.id)}
              />
            ))}
          </div>
        )}

        {showSkeleton && (
          <div className="repo-skeleton-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="sk sk-light repo-skeleton-card" />
            ))}
          </div>
        )}

        {showError && (
          <div className="repo-error">
            <p>GitHub 저장소를 불러오지 못했습니다. (API 호출 한도일 수 있어요)</p>
            <button className="btn btn-primary" onClick={onRetry}>
              다시 시도
            </button>
          </div>
        )}

        {showEmpty && (
          <div className="repo-error">
            <p>
              {readmeErrored
                ? 'README를 불러오지 못했습니다. (GitHub API 호출 한도일 수 있어요)'
                : '표시할 README가 있는 저장소를 찾지 못했습니다.'}
            </p>
            {readmeErrored && (
              <button className="btn btn-primary" onClick={onRetry}>
                다시 시도
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
