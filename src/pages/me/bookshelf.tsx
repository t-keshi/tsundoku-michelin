import Head from "next/head";
import React from "react";
import { Layout } from "../../components/layout/Layout";
import { BookshelfTemplate } from "../../templates/bookshelf";
import { NextPageWithLayout } from "../../type";

const Bookshelf: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>積読ミシュラン | Bookshelf</title>
      </Head>
      <BookshelfTemplate />
    </>
  );
};

Bookshelf.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Bookshelf;
