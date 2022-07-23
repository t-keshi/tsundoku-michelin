import { useRouter } from 'next/router';
import { fetchUserBookLogs } from '../services/query/fetchUserBookLogs';
import { sdkHooks } from '../services/sdk';

export const useUser = () => {
  const router = useRouter();
  const query = router.query as { userId: string };
  const { userId } = query;
  const { data } = sdkHooks.useFetchUserBookLogs(
    userId ? [fetchUserBookLogs] : null,
    { userId: userId ?? '' },
    { suspense: true },
  );

  return { data };
};
