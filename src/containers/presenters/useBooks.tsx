import { sdkHooks } from '../services/sdk';
import { fetchBooks } from '../services/query/fetchBooks';

export const useBooks = () => {
  const { data, error } = sdkHooks.useFetchBooks(fetchBooks);

  return {
    data,
    isLoading: !error && !data,
  };
};
