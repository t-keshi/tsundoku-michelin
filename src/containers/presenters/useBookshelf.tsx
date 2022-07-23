import { fetchBookshelfBooks } from '../services/query/fetchBookshelfBooks';
import { sdkHooks } from '../services/sdk';

export const useBookshelf = (uid: string) => {
  const { data, error } = sdkHooks.useFetchBookshelfBooks(
    [fetchBookshelfBooks, uid],
    { userId: uid },
    { suspense: true },
  );

  return {
    data,
    isLoading: !data && !error,
  };
};
