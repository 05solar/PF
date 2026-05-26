import { useEffect, useRef, useState } from 'react';
import type { CodeSnippet, Project } from '../types';

type CodeSnippetProps = {
  snippet: CodeSnippet;
};

function CodeBlock({ snippet }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-card">
      <div className="code-card-head">
        <div className="code-card-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="code-card-label">{snippet.label}</span>
        <span className="code-card-lang">{snippet.lang}</span>
        <button className="copy-btn" onClick={copy} aria-label="코드 복사">
          {copied ? 'COPIED' : 'COPY'}
        </button>
      </div>
      <pre className="code-card-body">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

type ProjectDetailProps = {
  project: Project | null;
  total: number;
  hasPrev: boolean;
  hasNext: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ProjectDetail({
  project,
  total,
  hasPrev,
  hasNext,
  onClose,
  onPrev,
  onNext,
}: ProjectDetailProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [project?.id]);

  if (!project) return null;

  return (
    <div className="detail-overlay" onClick={onClose} data-screen-label={`Detail ${project.index}`}>
      <div className="detail-panel" ref={panelRef} onClick={(event) => event.stopPropagation()}>
        <div className="dp-topbar">
          <div className="dp-nav">
            <button className="dp-nav-btn" onClick={onPrev} disabled={!hasPrev} aria-label="이전 프로젝트">
              ← Prev
            </button>
            <button className="dp-nav-btn" onClick={onNext} disabled={!hasNext} aria-label="다음 프로젝트">
              Next →
            </button>
          </div>
          <button className="dp-close" onClick={onClose} aria-label="닫기">
            Close ×
          </button>
        </div>

        <header className="dp-header">
          <div className="dp-index">{project.index}</div>
          <div className="dp-meta">
            <span className="dp-category">{project.category}</span>
            <span className="dp-dot">/</span>
            <span className="dp-year">{project.year}</span>
          </div>
          <h1 className="dp-title">{project.title}</h1>
          <p className="dp-subtitle">{project.subtitle}</p>

          <div className="dp-cta-row">
            <a className="dp-btn dp-btn-primary" href={project.github} target="_blank" rel="noreferrer">
              <span>GitHub Repository</span>
              <span>↗</span>
            </a>
            {project.demo ? (
              <a className="dp-btn dp-btn-ghost" href={project.demo} target="_blank" rel="noreferrer">
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            ) : (
              <span className="dp-btn dp-btn-disabled">
                <span>Live Demo</span>
                <span className="dp-btn-tag">준비중</span>
              </span>
            )}
          </div>
        </header>

        <section className="dp-section">
          <span className="dp-label">About</span>
          <p className="dp-body">{project.description}</p>
        </section>

        <section className="dp-section dp-grid-2">
          <div>
            <span className="dp-label">Role</span>
            <p className="dp-body-sm">{project.role}</p>
          </div>
          <div>
            <span className="dp-label">Period</span>
            <p className="dp-body-sm">{project.period}</p>
          </div>
        </section>

        <section className="dp-section">
          <span className="dp-label">Tech Stack</span>
          <div className="dp-tech">
            {project.tech.map((tech) => (
              <span key={tech} className="dp-tech-chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="dp-section">
          <span className="dp-label">Highlights</span>
          <ul className="dp-highlights">
            {project.highlights.map((highlight, index) => (
              <li key={highlight}>
                <span className="dp-h-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="dp-h-text">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="dp-section">
          <span className="dp-label">Code / Notes</span>
          <div className="dp-snippets">
            {project.snippets.map((snippet) => (
              <CodeBlock key={`${project.id}-${snippet.label}`} snippet={snippet} />
            ))}
          </div>
        </section>

        <footer className="dp-footer">
          <span>
            {project.index} / {String(total).padStart(2, '0')}
          </span>
          <span className="dp-footer-hint">
            <kbd>←</kbd> <kbd>→</kbd> 이동 · <kbd>ESC</kbd> 닫기
          </span>
        </footer>
      </div>
    </div>
  );
}
