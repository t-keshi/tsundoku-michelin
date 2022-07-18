import React from "react";
import { Layout } from "../../components/layout/Layout";
import { NextPageWithLayout } from "../../type";
import Head from "next/head";
import { LogsTemplate } from "../../templates/logs";
import { SWRConfig } from "swr";
import { fetchUserBookLogs } from "../../containers/services/query/fetchUserBookLogs";
import { FetchUserBookLogsQuery } from "../../../generated/types";
import { GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { sdk, sdkHooks } from "../../containers/services/sdk";
import { Typography } from "../../components/ui";
import { UserTemplate } from "../../templates/user";

type PageProps = {
  fallback: { [key: typeof fetchUserBookLogs]: FetchUserBookLogsQuery };
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const bookId = context.params?.bookId ?? "";
  const res = await sdk.FetchBookWithContents({ bookId });

  return {
    props: {
      fallback: {
        [fetchUserBookLogs]: res,
      },
      revalidate: 3600,
    },
  };
};

const Logs: React.FC = () => {
  const { status, data: session } = useSession();
  const uid = session?.user
    ? (session.user as Session & { uid: string }).uid
    : undefined;
  const { data } = sdkHooks.useFetchUserBookLogs(
    uid ? fetchUserBookLogs : null,
    { userId: uid ?? "" },
    { suspense: true }
  );

  if (!data || status === "loading") {
    return <Typography variant="overline">loading...</Typography>;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Logs</title>
      </Head>
      <UserTemplate />
    </>
  );
};

const LogsPage: NextPageWithLayout<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Logs />
    </SWRConfig>
  );
};

LogsPage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default LogsPage;
