import { useEffect, useMemo, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectDetail } from './components/ProjectDetail';
import { ProjectsPage } from './pages/ProjectsPage';
import { projects } from './data/projects';

const readFlag = (key: string) => {
  try {
    return localStorage.getItem(key) === '1';
  } catch {
    return false;
  }
};

function App() {
  const [dark, setDark] = useState(() => readFlag('portfolio-dark'));
  const [collapsed, setCollapsed] = useState(() => readFlag('portfolio-collapsed'));
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = useMemo(
    () => projects.find((project) => project.id === activeId) ?? null,
    [activeId],
  );
  const activeIndex = active ? projects.findIndex((project) => project.id === active.id) : -1;

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('portfolio-dark', dark ? '1' : '0');
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('portfolio-collapsed', collapsed ? '1' : '0');
  }, [collapsed]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!activeId) return;
      const index = projects.findIndex((project) => project.id === activeId);

      if (event.key === 'ArrowRight' && index < projects.length - 1) {
        setActiveId(projects[index + 1].id);
      }
      if (event.key === 'ArrowLeft' && index > 0) {
        setActiveId(projects[index - 1].id);
      }
      if (event.key === 'Escape') {
        setActiveId(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeId]);

  useEffect(() => {
    document.body.style.overflow = activeId ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeId]);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)').forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          element.classList.add('is-in');
        }
      });
    };

    reveal();
    const timers = [window.setTimeout(reveal, 50), window.setTimeout(reveal, 250)];
    window.addEventListener('scroll', reveal, { passive: true });
    window.addEventListener('resize', reveal);

    return () => {
      timers.forEach(window.clearTimeout);
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('resize', reveal);
    };
  }, []);

  return (
    <div className={`app-root ${collapsed ? 'is-collapsed' : ''}`}>
      <Sidebar
        dark={dark}
        collapsed={collapsed}
        onToggleDark={() => setDark((value) => !value)}
        onToggleCollapse={() => setCollapsed((value) => !value)}
      />
      <main className="main-col">
        <ProjectsPage projects={projects} activeId={activeId} onSelect={setActiveId} />
      </main>
      <ProjectDetail
        project={active}
        total={projects.length}
        hasPrev={activeIndex > 0}
        hasNext={activeIndex >= 0 && activeIndex < projects.length - 1}
        onClose={() => setActiveId(null)}
        onPrev={() => activeIndex > 0 && setActiveId(projects[activeIndex - 1].id)}
        onNext={() =>
          activeIndex < projects.length - 1 && setActiveId(projects[activeIndex + 1].id)
        }
      />
    </div>
  );
}

export default App;
