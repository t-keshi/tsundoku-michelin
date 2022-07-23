import { fetchUser } from '../services/query/fetchUser';
import { sdkHooks } from '../services/sdk';

export const useUser = (userId: string) => {
  const { data, error } = sdkHooks.useFetchUser(
    [fetchUser, userId],
    { userId },
    { suspense: true },
  );

  return { data, isLoading: !data && !error };
};
