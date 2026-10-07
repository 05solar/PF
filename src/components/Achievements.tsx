const awards = [
  {
    title: '2026 오픈소스 SW 해커톤',
    medal: '🥇',
    prize: '대상',
    honor: '총장상',
    organizer: '전북대학교 SW중심사업단',
  },
  {
    title: '2026 SW 산학실전캡스톤',
    medal: '🥇',
    prize: '대상',
    honor: 'SW사업단장상',
    organizer: '전북대학교 SW중심사업단',
  },
  {
    title: '2026 호남권 SW중심대학사업 LLM 해커톤',
    medal: '🥈',
    prize: '우수상',
    organizer: '조선대학교 SW중심사업단',
  },
  {
    title: '2025 동계 한동대 빅데이터 캠프',
    medal: '🥈',
    prize: '우수상',
    organizer: '한동대 빅데이터혁신융합대학',
    period: '2026.01.13 ~ 2026.01.16',
  },
  {
    title: '2025 전북대 AI 경진대회',
    medal: '🥉',
    prize: '동상',
    organizer: '전북대학교 SW중심사업단',
  },
  {
    title: '2024 하계 한동대 빅데이터 캠프',
    medal: '🥈',
    prize: '우수상',
    organizer: '한동대 빅데이터혁신융합대학',
    period: '2024.07.16 ~ 2024.07.19',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="section-head" data-reveal>
        <span className="eyebrow">ACHIEVEMENTS & EXPERIENCE</span>
        <h2 className="section-title">수상 내역 · 경력 사항</h2>
      </div>

      <div className="achievements-stack">
        <div className="achievements-panel" data-reveal>
          <div className="achievements-panel-head">
            <h3 className="achievements-heading">수상 내역</h3>
          </div>
          <ul className="achievements-list">
            {awards.map((award) => (
              <li className="achievement-item" key={award.title}>
                <div className="achievement-content">
                  <h4>{award.title}</h4>
                  <p className="achievement-meta">{award.organizer}</p>
                </div>
                <div className="achievement-details">
                  <span className="achievement-prize">
                    {award.prize} <span className="achievement-medal" aria-hidden="true">{award.medal}</span>
                    {'honor' in award && <span className="achievement-honor"> · {award.honor}</span>}
                  </span>
                  {'period' in award && <span className="achievement-period">{award.period}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="achievements-panel" data-reveal>
          <div className="achievements-panel-head">
            <h3 className="achievements-heading">경력 사항</h3>
          </div>
          <div className="experience-item">
            <div className="experience-content">
              <h4>(주)헤드아이티</h4>
              <p className="achievement-description">GPU 서버 기반 RAG 서비스 환경 구축</p>
            </div>
            <div className="achievement-details">
              <span className="achievement-prize">인턴</span>
              <span className="achievement-period">2026.07 ~ 2026.08</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
