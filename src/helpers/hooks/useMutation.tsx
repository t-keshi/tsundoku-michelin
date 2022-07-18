import { useCallback } from "react";
import { useSnackbar } from "../../containers/contexts/snackbar";

type Options = {
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
  errorMessage?: string;
  successMessage?: string;
};

export const useMutation = <
  TMutateFn extends (...args: any) => Promise<unknown>
>(
  mutateFn: TMutateFn,
  options?: Options
) => {
  const { onOpen } = useSnackbar();

  const fn = useCallback(
    (args: any) =>
      mutateFn(args)
        .then(() => {
          options?.successMessage &&
            onOpen({ message: options.successMessage, status: "success" });
          options?.onSuccess && options?.onSuccess();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          onOpen({
            message: options?.errorMessage || "エラーが発生しました",
            status: "error",
          });
          options?.onError && options?.onError();
        })
        .finally(() => {
          options?.onSettled && options?.onSettled();
        }),
    [mutateFn, onOpen, options]
  );

  return { mutate: fn as TMutateFn };
};
