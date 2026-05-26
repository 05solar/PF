import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
};

export function ProjectCard({ project, isActive, onClick, onHover, onLeave }: ProjectCardProps) {
  return (
    <article
      className="project-card reveal"
      data-active={isActive ? 'true' : undefined}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      data-screen-label={`Project ${project.index}`}
    >
      <div className="pc-index">{project.index}</div>

      <div className="pc-main">
        <div className="pc-meta-row">
          <span className="pc-category">{project.category}</span>
          <span className="pc-year">{project.year}</span>
        </div>

        <h2 className="pc-title">{project.title}</h2>
        <p className="pc-subtitle">{project.subtitle}</p>

        <div className="pc-tech">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="pc-tech-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="pc-hover-preview">
          <div className="pc-hover-line">
            <span className="pc-hover-key">Role</span>
            <span className="pc-hover-val">{project.role}</span>
          </div>
          <div className="pc-hover-line">
            <span className="pc-hover-key">About</span>
            <span className="pc-hover-val pc-hover-desc">{project.description.slice(0, 120)}...</span>
          </div>
        </div>
      </div>

      <div className="pc-cta">
        <span className="pc-cta-text">View</span>
        <span className="pc-cta-arrow">→</span>
      </div>
    </article>
  );
}
