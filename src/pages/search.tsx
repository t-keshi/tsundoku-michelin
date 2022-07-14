import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import { SearchTemplate } from "../templates/search";
import { NextPageWithLayout } from "../type";

const Search: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>積読ミシュラン | Search</title>
      </Head>
      <SearchTemplate />
    </>
  );
};

Search.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Search;
