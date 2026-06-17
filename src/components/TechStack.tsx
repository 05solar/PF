import { techStack } from '../data/site';
import type { LangStat } from '../types';

type TechStackProps = {
  langStats: LangStat[];
  langReady: boolean;
  showSkeleton: boolean;
  showError: boolean;
};

export function TechStack({ langStats, langReady, showSkeleton, showError }: TechStackProps) {
  return (
    <section id="stack" className="section stack">
      <div className="section-head" data-reveal>
        <span className="eyebrow">TECH STACK</span>
        <h2 className="section-title">기술 스택</h2>
        <p className="section-desc">
          실무에서 사용하는 도구들과, GitHub 저장소에서 집계한 실제 언어 사용 비율입니다.
        </p>
      </div>

      <div className="stack-grid">
        <div className="stack-cards" data-reveal style={{ transitionDelay: '.05s' }}>
          {techStack.map((group) => (
            <div key={group.title} className="stack-card">
              <div className="stack-card-title">
                <span className="stack-card-mark" style={{ background: group.color }} />
                {group.title}
              </div>
              <div className="stack-chips">
                {group.items.map((item) => (
                  <span key={item} className="stack-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lang-panel" data-reveal style={{ transitionDelay: '.1s' }}>
          <div className="lang-panel-head">
            <span className="lang-panel-title">언어 사용 비율</span>
            <span className="lang-panel-src">from GitHub</span>
          </div>

          {langReady && (
            <div>
              <div className="lang-bar">
                {langStats.map((lang) => (
                  <div
                    key={lang.name}
                    className="lang-bar-seg"
                    style={{ width: lang.width, background: lang.color }}
                  />
                ))}
              </div>
              <div className="lang-list">
                {langStats.map((lang) => (
                  <div key={lang.name} className="lang-row">
                    <span className="lang-dot" style={{ background: lang.color }} />
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-pct">{lang.pctText}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showSkeleton && (
            <div className="lang-skeleton">
              <div className="sk sk-dark" />
              <div className="sk sk-dark" style={{ width: '70%' }} />
              <div className="sk sk-dark" style={{ width: '55%' }} />
            </div>
          )}

          {showError && <p className="lang-empty">언어 데이터를 불러오지 못했습니다.</p>}
        </div>
      </div>
    </section>
  );
}
