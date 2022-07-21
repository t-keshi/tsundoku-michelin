/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { useSnackbar } from '../../containers/contexts/snackbar';

type PromiseType<T extends Promise<any>> = T extends Promise<infer P> ? P : never;

type Options<TMutateFn extends (...args: any) => Promise<unknown>> = {
  onSuccess?: (res: PromiseType<ReturnType<TMutateFn>>) => void;
  onError?: () => void;
  onSettled?: () => void;
  errorMessage?: string;
  successMessage?: string;
};

export const useMutation = <TMutateFn extends (...args: any) => Promise<unknown>>(
  mutateFn: TMutateFn,
  options?: Options<TMutateFn>,
) => {
  const { onOpen } = useSnackbar();

  const fn = useCallback(
    (args: any) =>
      mutateFn(args)
        .then((res) => {
          if (options?.successMessage) {
            onOpen({ message: options.successMessage, status: 'success' });
          }
          if (options?.onSuccess) {
            options?.onSuccess(res as PromiseType<ReturnType<TMutateFn>>);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(`######### ${error} #########`);
          onOpen({
            message: options?.errorMessage || 'エラーが発生しました',
            status: 'error',
          });
          if (options?.onError) {
            options?.onError();
          }
        })
        .finally(() => {
          if (options?.onSettled) {
            options?.onSettled();
          }
        }),
    [mutateFn, onOpen, options],
  ) as TMutateFn;

  return { mutate: fn };
};
