import { fetchUser } from '../services/query/fetchUser';
import { sdk } from '../services/sdk';

export const useUser = (userId: string) => {
  const { data, error } = sdk.useFetchUser([fetchUser, userId], { userId }, { suspense: true });

  return { data, isLoading: !data && !error };
};
