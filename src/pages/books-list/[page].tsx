import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { SWRConfig, unstable_serialize } from 'swr';
import { FetchBooksEdgeQuery } from '../../../generated/types';
import { Layout } from '../../components/layout/Layout';
import { Loader } from '../../components/ui';
import { useBooks } from '../../containers/presenters/useBooks';
import { fetchBooksEdge } from '../../containers/services/query/fetchBooksEdge';
import { sdk } from '../../containers/services/sdk';
import { BooksListTemplate } from '../../templates/books-list';
import { NextPageWithLayout } from '../../type';

type PageProps = {
  fallback: { [key: string]: FetchBooksEdgeQuery };
};

export const getStaticPaths = async () => {
  const res = await sdk.FetchBooksCount();
  const totalPage = Math.floor(res.booksCount.count / 50);
  const paths = [...Array(totalPage)].map((page) => ({ prams: { page } }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PageProps, { page: string }> = async (context) => {
  const page = parseInt(context.params?.page ?? '0', 10);
  const offset = (page - 1) * 50;
  const res = await sdk.FetchBooksEdge({ offset });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchBooksEdge, offset])]: res,
      },
      revalidate: 60,
    },
  };
};

const BooksList: React.FC = () => {
  const router = useRouter();
  const query = router.query as { page: string };
  const page = parseInt(query?.page ?? '0', 10);
  const { data } = useBooks(page);

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン</title>
      </Head>
      <BooksListTemplate
        books={data.booksEdge.books}
        page={page}
        hasPrevPage={page !== 1}
        hasNextPage={Boolean(data.booksEdge.hasNextPage)}
      />
    </>
  );
};

const BooksListPage: NextPageWithLayout<PageProps> = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Suspense fallback={<Loader page />}>
      <BooksList />
    </Suspense>
  </SWRConfig>
);

BooksListPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default BooksListPage;
