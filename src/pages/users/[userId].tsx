import React from 'react';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { fetchUserBookLogs } from '../../containers/services/query/fetchUserBookLogs';
import { FetchBookshelfBooksQuery } from '../../../generated/types';
import { sdk, sdkHooks } from '../../containers/services/sdk';
import { Typography } from '../../components/ui';
import { UserTemplate } from '../../templates/user';
import { fetchBookshelfBooks } from '../../containers/services/query/fetchBookshelfBooks';

type PageProps = {
  fallback: { [key: typeof fetchBookshelfBooks]: FetchBookshelfBooksQuery };
};

export const getServerSideProps: GetServerSideProps<PageProps, { userId: string }> = async (
  context,
) => {
  const userId = context.params?.userId ?? '';
  const res = await sdk.FetchBookshelfBooks({ userId });

  return {
    props: {
      fallback: {
        [fetchBookshelfBooks]: res,
      },
    },
  };
};

const Logs: React.FC = () => {
  const { status, data: session } = useSession();
  const uid = session?.user ? (session.user as Session & { uid: string }).uid : undefined;
  const { data } = sdkHooks.useFetchUserBookLogs(
    uid ? fetchUserBookLogs : null,
    { userId: uid ?? '' },
    { suspense: true },
  );

  if (!data || status === 'loading') {
    return <Typography variant="overline">loading...</Typography>;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | User</title>
      </Head>
      <UserTemplate />
    </>
  );
};

const UserPage: NextPageWithLayout<PageProps> = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Logs />
  </SWRConfig>
);

UserPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default UserPage;
