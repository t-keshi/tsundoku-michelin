import Head from 'next/head';
import { Suspense } from 'react';
import { Layout } from '../components/layout/Layout';
import { SearchTemplate } from '../templates/search';
import { NextPageWithLayout } from '../type';
import { useSearch } from '../containers/presenters/useSearch';

const Search: NextPageWithLayout = () => {
  const {
    data,
    onSearch,
    variables: { keyword },
  } = useSearch();

  return (
    <>
      <Head>
        <title>積読ミシュラン | Search</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchTemplate books={data?.books} keyword={keyword} onSearch={onSearch} />
      </Suspense>
    </>
  );
};

Search.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Search;
