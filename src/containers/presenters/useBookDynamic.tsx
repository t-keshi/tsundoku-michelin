import { v4 as uuid } from 'uuid';
import { sdk, sdkHooks } from '../services/sdk';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchBookshelfs } from '../services/query/fetchBookshelfs';

export const useBookDynamic = (uid: string | undefined, bookId: string | undefined) => {
  const { data, error, mutate } = sdkHooks.useFetchBookshelfs(
    uid && bookId ? [fetchBookshelfs, uid, bookId] : null,
    {
      userId: uid || '',
      bookId: bookId || '',
    },
    { suspense: true },
  );

  const { mutate: onAddBookshelf } = useMutation(() => sdk.AddBookshelf({ bookId: bookId || '' }), {
    successMessage: 'MY本棚に追加しました',
    onSuccess: () => {
      if (data) {
        mutate({
          ...data,
          bookshelf: { id: uuid() },
        });
      }
    },
  });

  const { mutate: onRemoveBookshelf } = useMutation(
    () => sdk.RemoveBookshelf({ bookId: bookId || '' }),
    {
      successMessage: 'MY本棚から削除しました',
      onSuccess: () => {
        if (data) {
          mutate({
            ...data,
            bookshelf: undefined,
          });
        }
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
