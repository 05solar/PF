import { useCallback, useRef } from 'react';

const FLIP_ID = 'flip';
const DURATION = 600;
/* theme.css의 --ease-smooth와 같은 곡선 — 급출발 없이 완만하게 가속·감속 */
const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

/**
 * 그리드 아이템의 위치·폭이 바뀌기 직전에 captureFlip()을 호출하면,
 * 리렌더 후 이전 자리에서 새 자리로 부드럽게 이동하는 FLIP 애니메이션을 걸어 줍니다.
 */
export function useFlipList<T extends HTMLElement>() {
  const listRef = useRef<T | null>(null);

  const captureFlip = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const items = Array.from(list.children) as HTMLElement[];
    // First: 레이아웃이 바뀌기 전 위치 (진행 중인 FLIP의 변환값도 포함되어 자연스럽게 이어짐)
    const first = items.map((el) => el.getBoundingClientRect());

    // Last: React가 DOM을 갱신한 뒤, 다음 페인트 직전에 새 위치를 읽어 역변환을 겁니다.
    requestAnimationFrame(() => {
      items.forEach((el, i) => {
        const f = first[i];
        if (!f) return;
        const l = el.getBoundingClientRect();
        const dx = f.left - l.left;
        const dy = f.top - l.top;
        const widthChanged = Math.abs(f.width - l.width) > 0.5;
        if (!dx && !dy && !widthChanged) return;

        // 이전 FLIP만 취소 (box-shadow 등 다른 트랜지션은 건드리지 않음)
        el.getAnimations()
          .filter((a) => a.id === FLIP_ID)
          .forEach((a) => a.cancel());

        const from: Keyframe = { transform: `translate(${dx}px, ${dy}px)` };
        const to: Keyframe = { transform: 'none' };
        if (widthChanged) {
          from.width = `${f.width}px`;
          to.width = `${l.width}px`;
        }
        el.animate([from, to], { id: FLIP_ID, duration: DURATION, easing: EASE });
      });
    });
  }, []);

  return { listRef, captureFlip };
}
