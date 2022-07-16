import { GetStaticProps } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { SWRConfig } from "swr";
import { FetchBookshelfBooksQuery } from "../../../generated/types";
import { Layout } from "../../components/layout/Layout";
import { Typography } from "../../components/ui";
import { fetchBookshelfBooks } from "../../services/query/fetchBookshelfBooks";
import { sdk, sdkHooks } from "../../services/sdk";
import { BookshelfTemplate } from "../../templates/bookshelf";
import { NextPageWithLayout } from "../../type";

type PageProps = {
  fallback: { [key: typeof fetchBookshelfBooks]: FetchBookshelfBooksQuery };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const session = await getSession();
  const uid = session?.user
    ? (session.user as Session & { uid: string }).uid
    : undefined;
  const res = await sdk.FetchBookshelfBooks({ userId: uid ?? "" });

  return {
    props: {
      fallback: {
        [fetchBookshelfBooks]: res,
      },
      revalidate: 3600,
    },
  };
};

const Bookshelf: React.FC = () => {
  const { status, data: session } = useSession();
  const uid = session?.user
    ? (session.user as Session & { uid: string }).uid
    : undefined;
  const { data } = sdkHooks.useFetchBookshelfBooks(
    uid ? fetchBookshelfBooks : null,
    { userId: uid ?? "" },
    { suspense: true }
  );

  if (!data || status === "loading") {
    return <Typography variant="overline">loading...</Typography>;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Bookshelf</title>
      </Head>
      <BookshelfTemplate bookshelfs={data.bookshelfs} />
    </>
  );
};

const BookshelfPage: NextPageWithLayout<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Bookshelf />
    </SWRConfig>
  );
};

BookshelfPage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default BookshelfPage;
