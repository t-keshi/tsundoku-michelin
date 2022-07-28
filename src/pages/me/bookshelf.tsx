import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';
import React, { Suspense } from 'react';
import { SWRConfig, unstable_serialize } from 'swr';
import { FetchBookshelfBooksQuery } from '../../../generated/types';
import { Layout } from '../../components/layout/Layout';
import { Loader } from '../../components/ui/Loader/Loader';
import { useBookshelf } from '../../containers/presenters/useBookshelf';
import { fetchBookshelfBooks } from '../../containers/services/query/fetchBookshelfBooks';
import { sdk } from '../../containers/services/sdk';
import { BookshelfTemplate } from '../../templates/bookshelf';
import { NextPageWithLayout } from '../../type';
import { authOptions } from '../api/auth/[...nextauth]';

type PageProps = {
  fallback: {
    [key: string]: FetchBookshelfBooksQuery;
  };
  uid: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (!session.user.name) {
    return {
      redirect: {
        destination: '/auth/onboard',
        permanent: false,
      },
    };
  }

  const { uid } = session.user;
  const res = await sdk.FetchBookshelfBooks({ userId: uid });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchBookshelfBooks, uid])]: res,
      },
      uid,
    },
  };
};

const Bookshelf: React.FC<{ uid: string }> = ({ uid }) => {
  const { data } = useBookshelf(uid);

  if (!data) {
    return null;
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

const BookshelfPage: NextPageWithLayout<PageProps> = ({ fallback, uid }) => (
  <SWRConfig value={{ fallback }}>
    <Suspense fallback={<Loader page />}>
      <Bookshelf uid={uid} />
    </Suspense>
  </SWRConfig>
);

BookshelfPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BookshelfPage;
