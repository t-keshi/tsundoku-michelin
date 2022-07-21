import { useCallback, useState, useDeferredValue } from 'react';
import { sdkHooks } from '../services/sdk';
import { searchBooks } from '../services/query/searchBooks';

export const useSearch = () => {
  const [keyword, setKeyword] = useState<undefined | string>();
  const defferedKeyword = useDeferredValue(keyword);

  const { data, error } = sdkHooks.useSearchBooks(
    defferedKeyword !== undefined && defferedKeyword !== '' ? [searchBooks, defferedKeyword] : null,
    {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      keyword: defferedKeyword!,
    },
    { suspense: true },
  );

  const handleSearch = useCallback((newKeyword: string) => {
    setKeyword(newKeyword);
  }, []);

  return {
    data,
    isLoading: !data && !error,
    onSearch: handleSearch,
    variables: {
      keyword,
    },
  };
};
