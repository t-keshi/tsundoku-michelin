import Head from 'next/head';
import { Suspense } from 'react';
import { Layout } from '../components/layout/Layout';
import { SearchTemplate } from '../templates/search';
import { NextPageWithLayout } from '../type';
import { useSearch } from '../containers/presenters/useSearch';
import { Loader } from '../components/ui';

const Search: React.FC = () => {
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
      <SearchTemplate books={data?.books} keyword={keyword} onSearch={onSearch} />
    </>
  );
};

const SearchPage: NextPageWithLayout = () => (
  <Suspense fallback={<Loader page />}>
    <Search />
  </Suspense>
);

SearchPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default SearchPage;
