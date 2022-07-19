import { GetServerSideProps } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';
import Head from 'next/head';
import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { Layout } from '../../components/layout/Layout';
import { Typography } from '../../components/ui';
import { fetchBookshelfBooks } from '../../containers/services/query/fetchBookshelfBooks';
import { sdkHooks } from '../../containers/services/sdk';
import { BookshelfTemplate } from '../../templates/bookshelf';
import { NextPageWithLayout } from '../../type';
import { authOptions } from '../api/auth/[...nextauth]';

type PageProps = {
  session: Session;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      uid: session.user.uid,
    },
  };
};

const Bookshelf: React.FC<PageProps> = ({ session }) => {
  const { uid } = session.user;
  const { data } = sdkHooks.useFetchBookshelfBooks(
    uid ? fetchBookshelfBooks : null,
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

const BookshelfPage: NextPageWithLayout<PageProps> = ({ session }) => (
  <SWRConfig>
    <Suspense fallback={<Typography variant="overline">loading...</Typography>}>
      <Bookshelf session={session} />
    </Suspense>
  </SWRConfig>
);

BookshelfPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BookshelfPage;
