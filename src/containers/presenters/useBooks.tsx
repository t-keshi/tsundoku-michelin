import { sdkHooks } from '../services/sdk';
import { fetchBooksEdge } from '../services/query/fetchBooksEdge';

export const useBooks = (page: number) => {
  const offset = (page - 1) * 50;
  const { data, error } = sdkHooks.useFetchBooksEdge(
    [fetchBooksEdge, offset],
    { offset },
    { suspense: true },
  );

  return {
    data,
    isLoading: !error && !data,
  };
};
