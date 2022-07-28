import { sdk } from '../services/sdk';
import { fetchBooksEdge } from '../services/query/fetchBooksEdge';

export const useBooks = (page: number) => {
  const offset = (page - 1) * 50;
  const { data, error } = sdk.useFetchBooksEdge(
    [fetchBooksEdge, offset],
    { offset },
    {
      suspense: true,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    data,
    isLoading: !error && !data,
  };
};
