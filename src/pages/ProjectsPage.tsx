import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import type { Project } from '../types';

type ProjectsPageProps = {
  projects: Project[];
  activeId: string | null;
  onSelect: (projectId: string) => void;
};

export function ProjectsPage({ projects, activeId, onSelect }: ProjectsPageProps) {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <section className="project-list" data-screen-label="Project List">
      <div className="pl-header reveal">
        <div className="pl-header-row">
          <span className="pl-label">Projects</span>
          <span className="pl-count">{String(projects.length).padStart(2, '0')} items</span>
        </div>
        <h2 className="pl-title">
          만든 것들을 모아
          <br />
          <span className="pl-title-em">다음 방향을 보여줍니다</span>
        </h2>
        <p className="pl-desc">
          AI 도구 연결, 웹서비스 설계, 팀 프론트엔드 프로젝트까지 실제 저장소 기준으로 정리했습니다.
          카드를 열면 역할, 기술 스택, 핵심 구현 내용을 확인할 수 있습니다.
        </p>
      </div>

      <div className="pl-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeId === project.id || hoverId === project.id}
            onClick={() => onSelect(project.id)}
            onHover={() => setHoverId(project.id)}
            onLeave={() => setHoverId(null)}
          />
        ))}
      </div>

      <div className="pl-foot reveal">
        <span className="pl-foot-text">End of list</span>
        <span className="pl-foot-dot">/</span>
        <a className="pl-foot-link" href={profile.github} target="_blank" rel="noreferrer">
          GitHub에서 더 보기
        </a>
      </div>
    </section>
  );
}
