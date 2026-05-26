import { profile } from '../data/profile';

type SidebarProps = {
  dark: boolean;
  collapsed: boolean;
  onToggleDark: () => void;
  onToggleCollapse: () => void;
};

export function Sidebar({ dark, collapsed, onToggleDark, onToggleCollapse }: SidebarProps) {
  if (collapsed) {
    return (
      <aside className="sidebar sidebar-collapsed">
        <div className="sbc-inner">
          <button className="sbc-expand" onClick={onToggleCollapse} aria-label="사이드바 펼치기">
            <span className="sbc-expand-icon">›</span>
          </button>
          <span className="sbc-mark-dot" />
          <div className="sbc-vertical">
            <span className="sbc-vertical-text">{profile.nameEn.toUpperCase()} · PORTFOLIO</span>
          </div>
          <button className="sbc-theme" onClick={onToggleDark} aria-label="테마 변경">
            {dark ? 'D' : 'L'}
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sb-top">
          <div className="sb-mark">
            <span className="sb-mark-dot" />
            <span className="sb-mark-text">PORTFOLIO / 2026</span>
          </div>
          <div className="sb-top-actions">
            <button className="theme-toggle" onClick={onToggleDark} aria-label="테마 변경">
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb" data-dark={dark} />
              </span>
              <span className="theme-toggle-label">{dark ? 'DARK' : 'LIGHT'}</span>
            </button>
            <button className="collapse-btn" onClick={onToggleCollapse} aria-label="사이드바 접기">
              <span className="collapse-btn-icon">‹</span>
            </button>
          </div>
        </div>

        <header className="sb-header">
          <div className="sb-name-row">
            <h1 className="sb-name">{profile.name}</h1>
            <span className="sb-name-en">{profile.nameEn}</span>
          </div>
          <p className="sb-role">
            <span className="sb-role-dot" />
            {profile.roleKo}
          </p>
        </header>

        <section className="sb-section reveal">
          <span className="sb-label">About</span>
          <p className="sb-body">{profile.intro}</p>
          <p className="sb-body sb-body-muted">{profile.longIntro}</p>
        </section>

        <section className="sb-section reveal">
          <span className="sb-label">Stack</span>
          <div className="stack-groups">
            {Object.entries(profile.stack).map(([group, items]) => (
              <div key={group} className="stack-group">
                <div className="stack-group-title">{group}</div>
                <div className="stack-chips">
                  {items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sb-section reveal">
          <span className="sb-label">Contact</span>
          <ul className="contact-list">
            <li>
              <span className="contact-key">EMAIL</span>
              <a className="contact-val" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <span className="contact-key">GITHUB</span>
              <a className="contact-val" href={profile.github} target="_blank" rel="noreferrer">
                @05solar
              </a>
            </li>
            <li>
              <span className="contact-key">BASED</span>
              <span className="contact-val">{profile.location}</span>
            </li>
          </ul>
        </section>

        <footer className="sb-foot">
          <span>© 2026 {profile.nameEn}</span>
          <span className="sb-foot-tag">v2.0</span>
        </footer>
      </div>
    </aside>
  );
}
