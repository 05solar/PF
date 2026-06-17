import type { ContribDay } from '../types';
import { Heatmap } from './Heatmap';

type ActivityProps = {
  statContrib: string;
  weeks: (ContribDay | null)[][];
  contribReady: boolean;
  showSkeleton: boolean;
  showError: boolean;
};

export function Activity({
  statContrib,
  weeks,
  contribReady,
  showSkeleton,
  showError,
}: ActivityProps) {
  return (
    <section id="activity" className="section activity">
      <div className="section-head" data-reveal>
        <span className="eyebrow">ACTIVITY</span>
        <h2 className="section-title">GitHub 활동</h2>
        <p className="section-desc">최근 1년간의 실제 기여 그래프입니다. 꾸준함이 곧 실력입니다.</p>
      </div>

      <div className="activity-card" data-reveal style={{ transitionDelay: '.05s' }}>
        <div className="activity-stat">
          <span className="activity-stat-num">{statContrib}</span>
          <span className="activity-stat-label">최근 1년 기여</span>
        </div>

        {contribReady && (
          <div className="activity-scroll">
            <Heatmap weeks={weeks} />
          </div>
        )}
        {showSkeleton && <div className="sk sk-light activity-skeleton" />}
        {showError && <p className="activity-empty">기여 그래프를 불러오지 못했습니다.</p>}

        <div className="heatmap-legend">
          <span>Less</span>
          <span className="legend-swatch legend-0" />
          <span className="legend-swatch legend-1" />
          <span className="legend-swatch legend-2" />
          <span className="legend-swatch legend-3" />
          <span className="legend-swatch legend-4" />
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
