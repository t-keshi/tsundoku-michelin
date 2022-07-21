import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { FetchBookWithLogsQuery } from '../../../generated/types';
import { Layout } from '../../components/layout/Layout';
import { useBook } from '../../containers/presenters/useBook';
import { fetchBookWithLogs } from '../../containers/services/query/fetchBookWithLogs';
import { sdk } from '../../containers/services/sdk';
import { BookTemplate } from '../../templates/book';
import { NextPageWithLayout } from '../../type';

type PageProps = {
  fallback: { [key: typeof fetchBookWithLogs]: FetchBookWithLogsQuery };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<PageProps, { bookId: string }> = async (context) => {
  const bookId = context.params?.bookId ?? '';
  const res = await sdk.FetchBookWithLogs({ bookId });

  return {
    props: {
      fallback: {
        [fetchBookWithLogs]: res,
      },
      revalidate: 10,
    },
  };
};

const Book: React.FC = () => {
  const { data, onAddBookshelf, onRemoveBookshelf } = useBook();

  if (!data.bookWithLogsData) {
    throw new Error('');
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | {data.bookWithLogsData.book.title}</title>
      </Head>
      <BookTemplate
        bookWithLogs={data.bookWithLogsData.book}
        bookshelfs={data.bookshelfsData?.bookshelfs}
        onAddBookshelf={onAddBookshelf}
        onRemoveBookshelf={onRemoveBookshelf}
      />
    </>
  );
};

const BookPage: NextPageWithLayout<PageProps> = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Suspense fallback={<div>Loading...</div>}>
      <Book />
    </Suspense>
  </SWRConfig>
);

BookPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BookPage;
