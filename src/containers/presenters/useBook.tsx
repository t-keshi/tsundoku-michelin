import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { sdk, sdkHooks } from '../services/sdk';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchBookshelfs } from '../services/query/fetchBookshelfs';
import { fetchBookWithLogs } from '../services/query/fetchBookWithLogs';

export const useBook = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const query = router.query as { bookId: string };
  const { bookId } = query;

  const { data: bookWithLogsData, error: bookWithLogsError } = sdkHooks.useFetchBookWithLogs(
    [fetchBookWithLogs, bookId],
    { bookId },
    { suspense: true },
  );

  const {
    data: bookshelfsData,
    error: bookshelfsError,
    mutate,
  } = sdkHooks.useFetchBookshelfs(!bookWithLogsData ? null : [fetchBookshelfs, bookId], {
    bookId,
  });

  const { mutate: onAddBookshelf } = useMutation(() => sdk.AddBookshelf({ bookId: query.bookId }), {
    successMessage: 'MY本棚に追加しました',
    onSuccess: () => {
      if (bookshelfsData) {
        mutate({
          ...bookshelfsData,
          bookshelfs: [...bookshelfsData.bookshelfs, { user: { id: session?.user.uid || '' } }],
        });
      }
    },
  });

  const { mutate: onRemoveBookshelf } = useMutation(
    () => sdk.RemoveBookshelf({ bookId: query.bookId }),
    {
      successMessage: 'MY本棚から削除しました',
      onSuccess: () => {
        if (bookshelfsData) {
          mutate({
            ...bookshelfsData,
            bookshelfs: bookshelfsData.bookshelfs.filter(
              (bookshelf) => bookshelf.user.id !== session?.user.uid,
            ),
          });
        }
      },
    },
  );

  return {
    data: {
      bookWithLogsData,
      bookshelfsData,
    },
    isLoading: {
      bookWithLogs: !bookWithLogsError && !bookWithLogsData,
      bookshelfs: !bookshelfsError && !bookshelfsData,
    },
    onAddBookshelf,
    onRemoveBookshelf,
  };
};
