import { useEffect, useRef, useState } from 'react';
import { rawUrl, selectCoverPath } from '../lib/github';
import type { TreeFile } from '../lib/github';

export type RepoImage = { status: 'loading' | 'done' | 'error'; url: string | null };

type TreeEntry = { path: string; type: string; size?: number };

// 각 저장소의 git 트리를 받아 대표 이미지(커밋된 스크린샷 등) 한 장을 고릅니다.
export function useRepoImages(
  login: string,
  names: string[],
  resetKey: number,
): Record<string, RepoImage> {
  const [map, setMap] = useState<Record<string, RepoImage>>({});
  const startedRef = useRef<Set<string>>(new Set());

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
      setMap((m) => ({ ...m, [name]: { status: 'loading', url: null } }));

      fetch(`https://api.github.com/repos/${login}/${name}/git/trees/HEAD?recursive=1`)
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((data: { tree?: TreeEntry[] }) => {
          if (cancelled) return;
          const files: TreeFile[] = (data.tree || [])
            .filter((t) => t.type === 'blob')
            .map((t) => ({ path: t.path, size: t.size || 0 }));
          const path = selectCoverPath(files);
          setMap((m) => ({
            ...m,
            [name]: { status: 'done', url: path ? rawUrl(login, name, path) : null },
          }));
        })
        .catch(() => {
          if (!cancelled) setMap((m) => ({ ...m, [name]: { status: 'error', url: null } }));
        });
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login, resetKey, key]);

  return map;
}
