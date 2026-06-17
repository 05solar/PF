import { useEffect, useRef, useState } from 'react';
import { decodeBase64 } from '../lib/github';
import type { ReadmeEntry } from '../types';

// 주어진 저장소들의 README를 한 번씩 받아옵니다.
// 200 → 'done'(내용 포함), 404 → 'missing'(README 없음), 그 외 → 'error'.
// 이 결과로 "README가 있는 저장소만" 화면에 보여줄 수 있습니다.
export function useReadmes(
  login: string,
  names: string[],
  resetKey: number,
): Record<string, ReadmeEntry> {
  const [map, setMap] = useState<Record<string, ReadmeEntry>>({});
  const startedRef = useRef<Set<string>>(new Set());

  // 사용자 변경·재시도 시 캐시를 비웁니다.
  useEffect(() => {
    startedRef.current = new Set();
    setMap({});
  }, [login, resetKey]);

  const key = names.join('|');
  useEffect(() => {
    if (!login || names.length === 0) return;
    let cancelled = false;

    names.forEach((name) => {
      if (startedRef.current.has(name)) return;
      startedRef.current.add(name);
      setMap((m) => ({ ...m, [name]: { status: 'loading', text: '', baseUrl: '' } }));

      // 상대경로 이미지를 풀 기준 경로 (download_url 없으면 기본 브랜치 추정)
      const fallbackBase = `https://raw.githubusercontent.com/${login}/${name}/HEAD/`;

      fetch(`https://api.github.com/repos/${login}/${name}/readme`)
        .then((r) => {
          if (r.status === 404) return null; // README 없음
          if (!r.ok) return Promise.reject(r.status);
          return r.json();
        })
        .then((data: { content?: string; download_url?: string } | null) => {
          if (cancelled) return;
          if (data === null) {
            setMap((m) => ({ ...m, [name]: { status: 'missing', text: '', baseUrl: '' } }));
            return;
          }
          const baseUrl = data.download_url
            ? data.download_url.replace(/\/[^/]*$/, '/')
            : fallbackBase;
          setMap((m) => ({
            ...m,
            [name]: { status: 'done', text: decodeBase64(data.content || ''), baseUrl },
          }));
        })
        .catch(() => {
          if (!cancelled) {
            setMap((m) => ({ ...m, [name]: { status: 'error', text: '', baseUrl: '' } }));
          }
        });
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login, resetKey, key]);

  return map;
}
