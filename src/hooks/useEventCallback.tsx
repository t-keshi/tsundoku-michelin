import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

type CallbackFn<A extends any[], R> = (...args: A) => R;
type UseEventCallbackReturnType<A extends any[], R> = (...args: A) => R;

const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const useEventCallback = <A extends any[], R>(
  callback: CallbackFn<A, R>
): UseEventCallbackReturnType<A, R> => {
  const callbackRef = useRef<typeof callback>(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  useIsomorphicEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return useCallback((...args: A) => {
    const callback = callbackRef.current;
    return callback(...args);
  }, []);
};
