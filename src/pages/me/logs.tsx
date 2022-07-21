import React, { Suspense } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { LogsTemplate } from '../../templates/logs';
import { Loader } from '../../components/ui';
import { useLogs } from '../../containers/presenters/useLogs';

type PageProps = {
  uid: string;
};

const Logs: React.FC<PageProps> = ({ uid }) => {
  const { data, onRemoveBookLog } = useLogs(uid);

  if (!data) {
    throw new Error('');
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

const LogsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    if (router.isReady) {
      router.push('/');
    }
  }

  if (!session) {
    return null;
  }

  return (
    <Suspense fallback={<Loader page />}>
      <Logs uid={session.user.uid} />
    </Suspense>
  );
};

LogsPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default LogsPage;
