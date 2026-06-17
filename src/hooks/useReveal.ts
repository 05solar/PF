import { useEffect } from 'react';

// 스크롤로 화면에 들어오는 [data-reveal] 요소를 부드럽게 나타나게 합니다.
// signal 값이 바뀌면(데이터 로딩 등) 새로 등장한 요소까지 다시 관찰합니다.
export function useReveal(signal: unknown): void {
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const observe = () => {
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    };

    observe();
    // 옵저버가 동작하지 않는 환경을 위한 안전장치
    const fallback = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [signal]);
}
