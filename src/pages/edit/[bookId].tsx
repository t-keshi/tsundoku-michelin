import React, { Suspense } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { EditTemplate } from '../../templates/edit';
import { useBookLog } from '../../containers/presenters/useBookLog';
import { Box } from '../../components/ui';
import { NextPageWithLayout } from '../../type';

type PageProps = {
  uid: string;
};

const Edit: React.FC<PageProps> = ({ uid }) => {
  const { data, onSubmit } = useBookLog(uid);

  if (!data) {
    throw new Error('');
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
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Edit uid={session.user.uid} />
    </Suspense>
  );
};

EditPage.getLayout = (page: React.ReactElement) => (
  <Box sx={{ bgColor: 'primary-light', minHeight: '100vh' }}>{page}</Box>
);

export default EditPage;
