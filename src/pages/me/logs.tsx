import React from "react";
import { Layout } from "../../components/layout/Layout";
import { NextPageWithLayout } from "../../type";
import { ProfileTemplate } from "../../templates/profile";
import Head from "next/head";
import { LogsTemplate } from "../../templates/logs";

const Logs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>積読ミシュラン | Logs</title>
      </Head>
      <LogsTemplate />
    </>
  );
};

Logs.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Logs;
