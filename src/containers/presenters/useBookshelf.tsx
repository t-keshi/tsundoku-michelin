import { fetchBookshelfBooks } from '../services/query/fetchBookshelfBooks';
import { sdk } from '../services/sdk';

export const useBookshelf = (uid: string) => {
  const { data, error } = sdk.useFetchBookshelfBooks(
    [fetchBookshelfBooks, uid],
    { userId: uid },
    { suspense: true },
  );

  return {
    data,
    isLoading: !data && !error,
  };
};
