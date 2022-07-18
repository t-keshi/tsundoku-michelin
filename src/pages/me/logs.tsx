import React, { Suspense } from "react";
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
import { useRouter } from "next/router";

const Logs: React.FC = () => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    },
  });
  const uid = session?.user ? session.user.uid : undefined;
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
      <LogsTemplate bookLogs={data.bookLogs} />
    </>
  );
};

const LogsPage: NextPageWithLayout = () => {
  return (
    <Suspense fallback={<Typography variant="overline">loading...</Typography>}>
      <Logs />
    </Suspense>
  );
};

LogsPage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default LogsPage;
