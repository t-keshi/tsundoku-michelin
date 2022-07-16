import Head from "next/head";
import { Suspense, useCallback, useDeferredValue, useState } from "react";
import { Layout } from "../components/layout/Layout";
import { useDebounce } from "../hooks/useDebounce";
import { sdkHooks } from "../services/sdk";
import { SearchTemplate } from "../templates/search";
import { NextPageWithLayout } from "../type";

const Search: NextPageWithLayout = () => {
  const [keyword, setKeyword] = useState("");
  const debounce = useDebounce(500);
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debounce(() => setKeyword(e.target.value));
    },
    [debounce]
  );
  const deferredKeyword = useDeferredValue(keyword);
  const { data } = sdkHooks.useSearchBooks(
    deferredKeyword === "" ? null : deferredKeyword,
    {
      keyword: deferredKeyword,
    },
    { suspense: true }
  );

  return (
    <>
      <Head>
        <title>積読ミシュラン | Search</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchTemplate
          booksSearch={data?.booksSearch}
          onChange={handleSearch}
        />
      </Suspense>
    </>
  );
};

Search.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Search;
