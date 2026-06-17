import { GithubIcon } from './icons';

type HeroProps = {
  name: string;
  tagline: string;
  login: string;
  bioText: string;
  githubUrl: string;
  avatarUrl: string;
};

export function Hero({ name, tagline, login, bioText, githubUrl, avatarUrl }: HeroProps) {
  return (
    <header id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            OPEN TO WORK · 채용 제안 환영
          </div>
          <h1 className="hero-title">
            안녕하세요,
            <br />
            <span className="hero-title-em">{name}</span> 입니다.
          </h1>
          <p className="hero-lead">
            제품을 처음부터 끝까지 책임지는 <strong>{tagline}</strong>입니다. 프론트엔드의 사용자
            경험부터 백엔드 아키텍처와 배포까지, 한 흐름으로 만들어 냅니다.
          </p>
          <p className="hero-bio">{bioText}</p>
          <div className="hero-actions">
            <a className="btn btn-dark" href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={18} />
              GitHub 프로필
            </a>
            <a className="btn btn-light" href="#projects">
              프로젝트 보기 →
            </a>
          </div>
        </div>

        <div className="hero-card-wrap">
          <div className="hero-card-glow" aria-hidden="true" />
          <div className="hero-card">
            <div className="hero-card-bar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="hero-card-file">profile.tsx</span>
            </div>
            <div className="hero-card-avatar">
              <img src={avatarUrl} alt={name} />
            </div>
            <div className="hero-code">
              <div>
                <span className="t-kw">const</span> <span className="t-var">dev</span>{' '}
                <span className="t-op">=</span> {'{'}
              </div>
              <div className="t-indent">
                <span className="t-key">name</span>: <span className="t-str">"{name}"</span>,
              </div>
              <div className="t-indent">
                <span className="t-key">role</span>: <span className="t-str">"{tagline}"</span>,
              </div>
              <div className="t-indent">
                <span className="t-key">github</span>: <span className="t-str">"@{login}"</span>,
              </div>
              <div className="t-indent">
                <span className="t-key">status</span>: <span className="t-str">"available"</span>
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
