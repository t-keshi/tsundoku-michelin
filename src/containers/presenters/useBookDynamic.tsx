import { sdk, sdkHooks } from '../services/sdk';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchBookshelfs } from '../services/query/fetchBookshelfs';

export const useBookDynamic = (uid: string | undefined, bookId: string) => {
  const { data, error, mutate } = sdkHooks.useFetchBookshelfs(
    uid ? [fetchBookshelfs, uid, bookId] : null,
    {
      userId: uid || '',
      bookId: bookId || '',
    },
    { suspense: true },
  );

  const { mutate: onAddBookshelf } = useMutation(() => sdk.AddBookshelf({ bookId: bookId || '' }), {
    successMessage: 'MY本棚に追加しました',
    onSuccess: () => {
      mutate(undefined);
    },
  });

  const { mutate: onRemoveBookshelf } = useMutation(
    () => sdk.RemoveBookshelf({ bookId: bookId || '' }),
    {
      successMessage: 'MY本棚から削除しました',
      onSuccess: () => {
        mutate(undefined);
      },
    },
  );

  return {
    data,
    isLoading: !data && !error,
    onAddBookshelf,
    onRemoveBookshelf,
  };
};
