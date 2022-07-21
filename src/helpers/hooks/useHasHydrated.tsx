import { useEffect, useLayoutEffect, useState } from 'react';

export const useHasHydrated = (beforePaint = true) => {
  const [hasHydrated, setHasHydrated] = useState(false);

  const isServer = typeof window === 'undefined';
  const useEffectFn = beforePaint && !isServer ? useLayoutEffect : useEffect;

  useEffectFn(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};
