import React, { Suspense } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { EditTemplate } from '../../templates/edit';
import { useEdit } from '../../containers/presenters/useEdit';
import { Box } from '../../components/ui';
import { NextPageWithLayout } from '../../type';
import { Loader } from '../../components/ui/Loader/Loader';
import { useProtectedRoute } from '../../helpers/hooks/useProtectedRoute';

type PageProps = {
  uid: string;
  bookId: string;
};

const Edit: React.FC<PageProps> = ({ uid, bookId }) => {
  const { data, onSubmit } = useEdit(uid, bookId);

  if (!data) {
    throw new Error('suspense boundary throw error unexpectedly');
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Edit</title>
      </Head>
      <EditTemplate
        bookLog={data.bookLog}
        bookTitle={data.book.title}
        bookContents={data.book.bookContents}
        onSubmit={onSubmit}
      />
    </>
  );
};

const EditPage: NextPageWithLayout<PageProps> = () => {
  const session = useProtectedRoute();
  const router = useRouter();
  const bookId = router.isReady ? (router.query as { bookId: string }).bookId : undefined;

  if (!session || !bookId) {
    return null;
  }

  return (
    <Suspense fallback={<Loader page />}>
      <Edit uid={session.user.uid} bookId={bookId} />
    </Suspense>
  );
};

EditPage.getLayout = (page: React.ReactElement) => (
  <Box sx={{ bgColor: 'primary-light', minHeight: '100vh' }}>{page}</Box>
);

export default EditPage;
