import { useRouter } from 'next/router';
import { sdk, sdkHooks } from '../services/sdk';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchEditBookLogInfo } from '../services/query/fetchEditBookLogInfo';

export const useEdit = (uid: string, bookId: string) => {
  const router = useRouter();
  const { data, error, mutate } = sdkHooks.useFetchEditBookLogInfo(
    [fetchEditBookLogInfo, uid, bookId],
    {
      userId: uid,
      bookId,
    },
    { suspense: true },
  );

  const { mutate: createBookLog } = useMutation(
    (log: string) => sdk.CreateBookLog({ bookId, log }),
    {
      successMessage: '読書ログを投稿しました',
      onSuccess: () => {
        mutate(undefined);
        setTimeout(() => router.back(), 1000);
      },
    },
  );

  const { mutate: updateBookLog } = useMutation(
    (log: string) => sdk.UpdateBookLog({ bookLogId: data?.bookLog?.id || '', log }),
    {
      successMessage: '読書ログを更新しました',
      onSuccess: () => {
        mutate(undefined);
        setTimeout(() => router.back(), 1000);
      },
    },
  );

  return {
    data,
    isLoading: !error && !data,
    onSubmit: data?.bookLog?.id ? updateBookLog : createBookLog,
  };
};
