import React, { Suspense } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { EditTemplate } from '../../templates/edit';
import { useEdit } from '../../containers/presenters/useEdit';
import { Box } from '../../components/ui';
import { NextPageWithLayout } from '../../type';
import { Loader } from '../../components/ui/Loader/Loader';

type PageProps = {
  uid: string;
};

const Edit: React.FC<PageProps> = ({ uid }) => {
  const { data, onSubmit } = useEdit(uid);

  if (!data) {
    return null;
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
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    if (router.isReady) {
      router.push('/');
    }
  }

  if (!session) {
    return null;
  }

  return (
    <Suspense fallback={<Loader page />}>
      <Edit uid={session.user.uid} />
    </Suspense>
  );
};

EditPage.getLayout = (page: React.ReactElement) => (
  <Box sx={{ bgColor: 'primary-light', minHeight: '100vh' }}>{page}</Box>
);

export default EditPage;
