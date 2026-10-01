import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

type ContactProps = {
  login: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
};

export function Contact({ login, email, githubUrl, linkedinUrl }: ContactProps) {
  // 표시용 텍스트: 프로토콜/www/끝 슬래시를 떼어 읽기 좋게
  const linkedinText = linkedinUrl
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/\/$/, '');

  return (
    <section id="contact" className="section-full contact">
      <div className="contact-inner">
        <div className="contact-head" data-reveal>
          <span className="eyebrow eyebrow-light">CONTACT</span>
          <h2 className="contact-title">함께 만들어요</h2>
          <p className="contact-desc">
            새로운 기회나 협업 제안은 언제든 환영합니다. 아래 채널로 편하게 연락 주세요.
          </p>
        </div>

        <div className="contact-cards" data-reveal style={{ transitionDelay: '.05s' }}>
          <a className="contact-card" href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={24} />
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-val">@{login}</span>
          </a>
          <a className="contact-card" href={`mailto:${email}`}>
            <MailIcon size={24} />
            <span className="contact-card-label">Email</span>
            <span className="contact-card-val">{email}</span>
          </a>
          <a className="contact-card" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={24} />
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-val">{linkedinText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
