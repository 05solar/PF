type NavProps = {
  name: string;
  initial: string;
};

export function Nav({ name, initial }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-logo">{initial}</span>
          <span className="nav-name">{name}</span>
        </a>
        <div className="nav-links">
          <a href="#stack" className="nav-link">
            기술 스택
          </a>
          <a href="#projects" className="nav-link">
            프로젝트
          </a>
          <a href="#activity" className="nav-link">
            활동
          </a>
          <a href="#contact" className="nav-cta">
            연락하기
          </a>
        </div>
      </div>
    </nav>
  );
}
