import { useEffect, useState } from 'react';
import { ArrowUpIcon } from './icons';

// 아래로 어느 정도 스크롤하면 나타나는, 눌러서 맨 위로 올라가는 버튼입니다.
export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      className={`scroll-top${show ? ' is-visible' : ''}`}
      onClick={toTop}
      aria-label="맨 위로 이동"
      title="맨 위로"
    >
      <ArrowUpIcon size={22} />
    </button>
  );
}
