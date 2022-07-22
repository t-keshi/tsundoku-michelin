import React, { useCallback, useState } from 'react';
import { MdOutlineBookmarkAdd, MdTaskAlt } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import { Button } from '../components/ui';
import { useBookshelfs } from '../containers/presenters/useBookshelfs';

export const BookDynamic: React.FC = () => {
  const { data: session } = useSession();

  const { data, onAddBookshelf, onRemoveBookshelf } = useBookshelfs();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { bookshelfs } = data!;

  const isMyBookshelf = bookshelfs.find((bookshelf) => bookshelf.user.id === session?.user.uid);

  const [isClickable, setIsClickable] = useState(true);

  const handleClickAddBookshelf = useCallback(() => {
    setIsClickable(false);
    if (isClickable) {
      onAddBookshelf();
    }
    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  }, [isClickable, onAddBookshelf]);

  const handleClickRemoveBookshelf = useCallback(() => {
    setIsClickable(false);
    if (isClickable) {
      onRemoveBookshelf();
    }
    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  }, [isClickable, onRemoveBookshelf]);

  return (
    <div suppressHydrationWarning>
      {typeof window !== 'undefined' && isMyBookshelf && (
        <Button
          variant="outlined"
          color="secondary"
          style={{
            cursor: isClickable ? 'pointer' : 'wait',
          }}
          startIcon={<MdTaskAlt />}
          onClick={handleClickRemoveBookshelf}
        >
          MY本棚に追加済み
        </Button>
      )}
      {typeof window !== 'undefined' && !isMyBookshelf && (
        <Button
          variant="outlined"
          style={{
            cursor: isClickable ? 'pointer' : 'wait',
          }}
          startIcon={<MdOutlineBookmarkAdd />}
          onClick={handleClickAddBookshelf}
        >
          MY本棚に追加
        </Button>
      )}
    </div>
  );
};
