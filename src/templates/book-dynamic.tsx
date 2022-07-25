import React, { Suspense, useCallback, useState } from 'react';
import { MdEditNote, MdOutlineBookmarkAdd, MdTaskAlt } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button, Typography } from '../components/ui';
import { useBookDynamic } from '../containers/presenters/useBookDynamic';
import { LinkWithAuth } from '../components/organisms/LinkWithAuth';
import { ButtonWithAuth } from '../components/organisms/ButtonWidthAuth';

type Props = {
  uid: string | undefined;
  bookId: string;
};

const BookDynamic: React.FC<Props> = ({ uid, bookId }) => {
  const { data, onAddBookshelf, onRemoveBookshelf } = useBookDynamic(uid, bookId);

  const hasBookLog = Boolean(data?.bookLog?.id);
  const inBookshelf = Boolean(data?.bookshelf?.id);

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
        <Button startIcon={<MdEditNote />}>読書ログを{hasBookLog ? '更新' : '投稿'}</Button>
      </LinkWithAuth>
      {inBookshelf ? (
        <ButtonWithAuth>
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
        </ButtonWithAuth>
      ) : (
        <ButtonWithAuth>
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
        </ButtonWithAuth>
      )}
    </>
  );
};

export const BookDynamicComponent: React.FC = () => {
  const { data: session, status } = useSession();
  const uid = session?.user.uid;

  const router = useRouter();
  const { bookId } = router.query as { bookId: string };

  if (status === 'loading' || !router.isReady) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <Typography variant="overline" color="secondary">
          loading...
        </Typography>
      }
    >
      <BookDynamic uid={uid} bookId={bookId} />
    </Suspense>
  );
};
