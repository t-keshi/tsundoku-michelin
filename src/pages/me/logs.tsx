import React, { Suspense } from 'react';
import Head from 'next/head';
import { Session, unstable_getServerSession } from 'next-auth';
import { GetServerSideProps } from 'next';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { LogsTemplate } from '../../templates/logs';
import { fetchUserBookLogs } from '../../containers/services/query/fetchUserBookLogs';
import { sdkHooks } from '../../containers/services/sdk';
import { Typography } from '../../components/ui';
import { authOptions } from '../api/auth/[...nextauth]';

type PageProps = {
  session: Session;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

const Logs: React.FC<PageProps> = ({ session }) => {
  const { uid } = session.user;
  const { data } = sdkHooks.useFetchUserBookLogs(
    uid ? fetchUserBookLogs : null,
    { userId: uid ?? '' },
    { suspense: true },
  );

  if (!data) {
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

const LogsPage: NextPageWithLayout<PageProps> = ({ session }) => (
  <Suspense fallback={<Typography variant="overline">loading...</Typography>}>
    <Logs session={session} />
  </Suspense>
);

LogsPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default LogsPage;
