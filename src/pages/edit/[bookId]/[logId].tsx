import React, { Suspense } from "react";
import { EditTemplate } from "../../../templates/edit";
import Head from "next/head";
import { sdk } from "../../../containers/services/sdk";
import { fetchBookWithContents } from "../../../containers/services/query/fetchBookWithContents";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { FetchBookWithContentsQuery } from "../../../../generated/types";
import { SWRConfig } from "swr";
import { useBookLog } from "../../../containers/presenters/useBookLog";

type PageProps = {
  fallback: { [key: typeof fetchBookWithContents]: FetchBookWithContentsQuery };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { bookId: string }
> = async (context) => {
  const bookId = context.params?.bookId ?? "";
  const res = await sdk.FetchBookWithContents({ bookId });

  return {
    props: {
      fallback: {
        [fetchBookWithContents]: res,
      },
      revalidate: 3600,
    },
  };
};

const Edit: React.FC = () => {
  const { data, onSubmit } = useBookLog();

  if (!data) {
    throw new Error("");
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Edit</title>
      </Head>
      <EditTemplate
        bookTitle={data.book.title}
        bookContents={data.book.bookContents}
        onSubmit={onSubmit}
      />
    </>
  );
};

const EditPage: NextPage<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Edit />
      </Suspense>
    </SWRConfig>
  );
};

export default EditPage;
