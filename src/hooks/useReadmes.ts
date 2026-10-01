import { useMemo } from 'react';
import { bundledReadmes } from '../data/readmes';
import type { ReadmeEntry } from '../types';

// README는 사이트에 내장(bundledReadmes)되어 있어 더 이상 GitHub API를 호출하지 않습니다.
// (미인증 60회/시간 한도에 걸려 "README를 표시할 수 없음"이 뜨던 문제를 없앱니다.)
// 내장본이 있으면 'done', 없으면 'missing'으로 즉시 반환합니다. login·resetKey는 호환을 위해 둡니다.
export function useReadmes(
  _login: string,
  names: string[],
  _resetKey: number,
): Record<string, ReadmeEntry> {
  const key = names.join('|');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => {
    const map: Record<string, ReadmeEntry> = {};
    for (const name of names) {
      const b = bundledReadmes[name];
      map[name] = b
        ? { status: 'done', text: b.text, baseUrl: b.baseUrl }
        : { status: 'missing', text: '', baseUrl: '' };
    }
    return map;
  }, [key]);
}
