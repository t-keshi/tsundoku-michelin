import { useSWRConfig } from 'swr';
import { sdk, sdkHooks } from '../services/sdk';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchUserBookLogs } from '../services/query/fetchUserBookLogs';
import { fetchEditBookLogInfo } from '../services/query/fetchEditBookLogInfo';

export const useLogs = (uid: string) => {
  const { mutate } = useSWRConfig();
  const {
    data,
    error,
    mutate: mutateBookLogs,
  } = sdkHooks.useFetchUserBookLogs([fetchUserBookLogs, uid], { userId: uid }, { suspense: true });

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
