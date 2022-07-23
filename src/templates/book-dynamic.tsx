import React, { useCallback, useState } from 'react';
import { MdOutlineBookmarkAdd, MdTaskAlt } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui';
import { useBookDynamic } from '../containers/presenters/useBookDynamic';
import { LinkWithAuth } from '../components/organisms/LinkWithAuth';

export const BookDynamic: React.FC = () => {
  const { data: session } = useSession();
  const uid = session?.user.uid;

  const router = useRouter();
  const bookId = router.isReady ? (router.query as { bookId: string }).bookId : undefined;

  const { data, onAddBookshelf, onRemoveBookshelf } = useBookDynamic(uid, bookId);

  const hasBookLog = Boolean(data?.bookshelf?.id);
  const inBookshelf = Boolean(data?.bookLog?.id);

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
    <>
      <LinkWithAuth href={`/edit/${bookId}`}>
        <Button startIcon={<>✍️</>}>読書ログを{hasBookLog ? '更新' : '投稿'}</Button>
      </LinkWithAuth>
      {inBookshelf ? (
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
      ) : (
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
    </>
  );
};
