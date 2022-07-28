import React, { Suspense } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { SWRConfig, unstable_serialize } from 'swr';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { LogsTemplate } from '../../templates/logs';
import { Loader } from '../../components/ui';
import { useLogs } from '../../containers/presenters/useLogs';
import { authOptions } from '../api/auth/[...nextauth]';
import { sdk } from '../../containers/services/sdk';
import { FetchUserBookLogsQuery } from '../../../generated/types';
import { fetchUserBookLogs } from '../../containers/services/query/fetchUserBookLogs';

type PageProps = {
  fallback: {
    [key: string]: FetchUserBookLogsQuery;
  };
  uid: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (!session.user.name) {
    return {
      redirect: {
        destination: '/auth/onboard',
        permanent: false,
      },
    };
  }

  const { uid } = session.user;
  const res = await sdk.FetchUserBookLogs({ userId: uid });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchUserBookLogs, uid])]: res,
      },
      uid,
    },
  };
};

const Logs: React.FC<{ uid: string }> = ({ uid }) => {
  const { data, onRemoveBookLog } = useLogs(uid);

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Logs</title>
      </Head>
      <LogsTemplate bookLogs={data.bookLogs} onRemoveBookLog={onRemoveBookLog} />
    </>
  );
};

const LogsPage: NextPageWithLayout<PageProps> = ({ fallback, uid }) => (
  <SWRConfig value={{ fallback }}>
    <Suspense fallback={<Loader page />}>
      <Logs uid={uid} />
    </Suspense>
  </SWRConfig>
);

LogsPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default LogsPage;
