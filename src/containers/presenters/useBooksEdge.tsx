import { useCallback } from 'react';
import { sdkHooks } from '../services/sdk';
import { fetchBooks } from '../services/query/fetchBooks';

export const useBooksEdge = () => {
  const { data, error, size, setSize } = sdkHooks.useFetchBooksEdgeInfinite(
    fetchBooks,
    (_, previousPageData) => {
      if (previousPageData && !previousPageData.booksEdge) return null;

      return ['cursor', previousPageData ? previousPageData.booksEdge.endCursor : null];
    },
  );
  const handleLoadeMore = useCallback(() => setSize(size + 1), [setSize, size]);

  return {
    data,
    isLoading: !error && !data,
    onLoadMore: handleLoadeMore,
  };
};
