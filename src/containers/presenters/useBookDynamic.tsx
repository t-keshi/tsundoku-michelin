import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { sdk, sdkHooks } from '../services/sdk';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchBookshelfs } from '../services/query/fetchBookshelfs';

export const useBookDynamic = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const query = router.query as { bookId: string };
  const { bookId } = query;

  const { data, error, mutate } = sdkHooks.useFetchBookshelfs(
    [fetchBookshelfs, bookId],
    {
      bookId,
    },
    { suspense: true },
  );

  const { mutate: onAddBookshelf } = useMutation(() => sdk.AddBookshelf({ bookId: query.bookId }), {
    successMessage: 'MY本棚に追加しました',
    onSuccess: () => {
      if (data) {
        mutate({
          ...data,
          bookshelfs: [...data.bookshelfs, { user: { id: session?.user.uid || '' } }],
        });
      }
    },
  });

  const { mutate: onRemoveBookshelf } = useMutation(
    () => sdk.RemoveBookshelf({ bookId: query.bookId }),
    {
      successMessage: 'MY本棚から削除しました',
      onSuccess: () => {
        if (data) {
          mutate({
            ...data,
            bookshelfs: data.bookshelfs.filter(
              (bookshelf) => bookshelf.user.id !== session?.user.uid,
            ),
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
