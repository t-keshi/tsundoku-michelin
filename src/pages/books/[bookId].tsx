import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { Suspense } from 'react';
import { SWRConfig, unstable_serialize } from 'swr';
import { FetchBookWithLogsQuery } from '../../../generated/types';
import { Layout } from '../../components/layout/Layout';
import { Loader } from '../../components/ui';
import { useBook } from '../../containers/presenters/useBook';
import { fetchBookWithLogs } from '../../containers/services/query/fetchBookWithLogs';
import { sdk } from '../../containers/services/sdk';
import { BookTemplate } from '../../templates/book';
import { NextPageWithLayout } from '../../type';

type PageProps = {
  fallback: { [key: typeof fetchBookWithLogs]: FetchBookWithLogsQuery };
};

export const getStaticPaths = async () => {
  const res = await sdk.FetchBooks();
  const paths = res.books.map((book) => ({ prams: { id: book.id } }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PageProps, { bookId: string }> = async (context) => {
  const bookId = context.params?.bookId ?? '';
  const res = await sdk.FetchBookWithLogs({ bookId });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchBookWithLogs, bookId])]: res,
      },
      revalidate: 60,
    },
  };
};

const Book: React.FC = () => {
  const { data } = useBook();

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | {data.book.title}</title>
      </Head>
      <BookTemplate bookWithLogs={data.book} />
    </>
  );
};

const BookPage: NextPageWithLayout<PageProps> = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Suspense fallback={<Loader page />}>
      <Book />
    </Suspense>
  </SWRConfig>
);

BookPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BookPage;
