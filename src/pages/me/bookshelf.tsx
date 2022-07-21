import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Loader } from '../../components/ui/Loader/Loader';
import { fetchBookshelfBooks } from '../../containers/services/query/fetchBookshelfBooks';
import { sdkHooks } from '../../containers/services/sdk';
import { BookshelfTemplate } from '../../templates/bookshelf';
import { NextPageWithLayout } from '../../type';

type PageProps = {
  uid: string;
};

const Bookshelf: React.FC<PageProps> = ({ uid }) => {
  const { data } = sdkHooks.useFetchBookshelfBooks(
    fetchBookshelfBooks,
    { userId: uid ?? '' },
    { suspense: true },
  );

  if (!data) {
    throw new Error('');
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
      <Bookshelf uid={session.user.uid} />
    </Suspense>
  );
};

BookshelfPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BookshelfPage;
