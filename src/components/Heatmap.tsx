import type { ContribDay } from '../types';

const HEAT_COLORS = ['#eef1f7', '#c4d4f6', '#8aa8ed', '#4f6fe0', '#3346c9'];
// 한 열(주)의 가로 간격: 셀 11px + 간격 3px. CSS와 동일하게 유지해야 합니다.
const COL = 14;

type HeatmapProps = {
  weeks: (ContribDay | null)[][];
};

export function Heatmap({ weeks }: HeatmapProps) {
  const months: { ci: number; mo: number }[] = [];
  let last = -1;
  weeks.forEach((w, ci) => {
    const first = w.find((x) => x);
    if (first) {
      const mo = new Date(`${first.date}T00:00:00`).getMonth();
      if (mo !== last) {
        months.push({ ci, mo });
        last = mo;
      }
    }
  });

  return (
    <div className="heatmap">
      <div className="heatmap-months">
        {months.map((m, i) => (
          <span key={i} className="heatmap-month" style={{ left: m.ci * COL }}>
            {m.mo + 1}월
          </span>
        ))}
      </div>
      <div className="heatmap-grid">
        {weeks.map((week, ci) => (
          <div key={ci} className="heatmap-week">
            {week.map((day, di) => (
              <div
                key={di}
                className="heatmap-cell"
                title={day ? `${day.date}: ${day.count}` : ''}
                style={{ background: day ? HEAT_COLORS[day.level] : 'transparent' }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
