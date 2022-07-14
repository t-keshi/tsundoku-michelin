import { GetStaticProps } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";
import { FetchBooksQuery } from "../../generated/types";
import { Layout } from "../components/layout/Layout";
import { fetchBooks } from "../services/query/fetchBooks";
import { sdk, sdkHooks } from "../services/sdk";
import { HomeTemplate } from "../templates";
import { NextPageWithLayout } from "../type";

type PageProps = {
  fallback: { [key: typeof fetchBooks]: FetchBooksQuery };
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const res = await sdk.FetchBooks();

  return {
    props: {
      fallback: {
        [fetchBooks]: res,
      },
      revalidate: 3600,
    },
  };
};

const Home: React.FC = () => {
  const { data } = sdkHooks.useFetchBooks(fetchBooks);

  if (!data) {
    throw new Error("");
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン</title>
      </Head>
      <HomeTemplate books={data.books} />
    </>
  );
};

const HomePage: NextPageWithLayout<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
};

HomePage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default HomePage;
