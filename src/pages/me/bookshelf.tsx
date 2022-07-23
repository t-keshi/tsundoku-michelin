import Head from 'next/head';
import React, { Suspense } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Loader } from '../../components/ui/Loader/Loader';
import { useBookshelf } from '../../containers/presenters/useBookshelf';
import { useProtectedRoute } from '../../helpers/hooks/useProtectedRoute';
import { BookshelfTemplate } from '../../templates/bookshelf';
import { NextPageWithLayout } from '../../type';

type PageProps = {
  uid: string;
};

const Bookshelf: React.FC<PageProps> = ({ uid }) => {
  const { data } = useBookshelf(uid);

  if (!data) {
    throw new Error('suspense boundary throw error unexpectedly');
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Bookshelf</title>
      </Head>
      <BookshelfTemplate bookshelfs={data.bookshelfs} />
    </>
  );
};

const BookshelfPage: NextPageWithLayout = () => {
  const session = useProtectedRoute();

  if (!session) {
    return null;
  }

  return (
    <Suspense fallback={<Loader page />}>
      <Bookshelf uid={session.user.uid} />
    </Suspense>
  );
};

BookshelfPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BookshelfPage;
