import { useSWRConfig } from 'swr';
import { sdk } from '../services/sdk';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchUserBookLogs } from '../services/query/fetchUserBookLogs';
import { fetchEditBookLogInfo } from '../services/query/fetchEditBookLogInfo';

export const useLogs = (uid: string) => {
  const { mutate } = useSWRConfig();
  const {
    data,
    error,
    mutate: mutateBookLogs,
  } = sdk.useFetchUserBookLogs(
    [fetchUserBookLogs, uid],
    { userId: uid },
    { suspense: true, revalidateOnMount: false },
  );

  const { mutate: removeBookLog } = useMutation(
    (bookLogId: string) => sdk.RemoveBookLog({ bookLogId }),
    {
      successMessage: '読書ログを削除しました',
      onSuccess: (res) => {
        mutateBookLogs();
        mutate([fetchEditBookLogInfo, res.removeBookLog.bookId]);
      },
    },
  );

  return {
    data,
    isLoading: !error && !data,
    onRemoveBookLog: removeBookLog,
  };
};
