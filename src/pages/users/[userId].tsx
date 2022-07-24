import React, { Suspense } from 'react';
import Head from 'next/head';
import { SWRConfig, unstable_serialize } from 'swr';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { FetchUserQuery } from '../../../generated/types';
import { sdk } from '../../containers/services/sdk';
import { UserTemplate } from '../../templates/user';
import { useUser } from '../../containers/presenters/useUser';
import { Loader } from '../../components/ui';
import { fetchUser } from '../../containers/services/query/fetchUser';

type PageProps = {
  fallback: { [key: string]: FetchUserQuery };
};

export const getServerSideProps: GetServerSideProps<PageProps, { userId: string }> = async (
  context,
) => {
  const userId = context.params?.userId ?? '';
  const res = await sdk.FetchUser({ userId });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchUser, userId])]: res,
      },
    },
  };
};

const Users: React.FC<{ userId: string }> = ({ userId }) => {
  const { data } = useUser(userId);

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | User</title>
      </Head>
      <UserTemplate user={data.user} />
    </>
  );
};

const UserPage: NextPageWithLayout<PageProps> = ({ fallback }) => {
  const router = useRouter();
  const { userId } = router.query as { userId: string };

  if (!router.isReady) {
    return null;
  }

  return (
    <SWRConfig value={{ fallback }}>
      <Suspense fallback={<Loader page />}>
        <Users userId={userId} />
      </Suspense>
    </SWRConfig>
  );
};

UserPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default UserPage;
