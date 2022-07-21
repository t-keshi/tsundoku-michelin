import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { SWRConfig, unstable_serialize } from 'swr';
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

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: 'blocking' });

export const getStaticProps: GetStaticProps<PageProps, { bookId: string }> = async (context) => {
  const bookId = context.params?.bookId ?? '';
  const res = await sdk.FetchBookWithLogs({ bookId });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchBookWithLogs, bookId])]: res,
      },
      revalidate: 10,
    },
  };
};

const Book: React.FC = () => {
  const { data } = useBook();

  if (!data) {
    throw new Error('');
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
    <Book />
  </SWRConfig>
);

BookPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BookPage;
