import { useRouter } from 'next/router';
import { sdk } from '../services/sdk';
import { fetchBookWithLogs } from '../services/query/fetchBookWithLogs';

export const useBook = () => {
  const router = useRouter();
  const query = router.query as { bookId: string };
  const { bookId } = query;

  const { data: bookWithLogsData, error: bookWithLogsError } = sdk.useFetchBookWithLogs(
    [fetchBookWithLogs, bookId],
    { bookId },
    { suspense: true },
  );

  return {
    data: bookWithLogsData,
    isLoading: !bookWithLogsError && !bookWithLogsData,
  };
};
