import { useCallback, useEffect, useRef, useState } from 'react';

type UseTimeoutFnReturn = [() => boolean | null, () => void, () => void];

// eslint-disable-next-line @typescript-eslint/ban-types
const useTimeoutFn = (fn: Function, ms = 0): UseTimeoutFnReturn => {
  const ready = useRef<boolean | null>(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  const isReady = useCallback(() => ready.current, []);

  const set = useCallback(() => {
    ready.current = false;
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    ready.current = null;
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  useEffect(() => {
    set();

    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms]);

  return [isReady, clear, set];
};

export const useTimeout = (ms = 0) => {
  const [_, cancel] = useState(false);
  const handleCancel = useCallback(() => cancel((prev) => !prev), []);

  return useTimeoutFn(handleCancel, ms);
};
