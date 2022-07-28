import React, { Suspense } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { SWRConfig, unstable_serialize } from 'swr';
import { Box, Flex, Typography } from '../../components/ui';
import { NextPageWithLayout } from '../../type';
import { useOnboard } from '../../containers/presenters/useOnboard';
import { OnboardTemplate } from '../../templates/onboard';
import { fetchUserOnboard } from '../../containers/services/query/fetchUserOnboard';
import { authOptions } from '../api/auth/[...nextauth]';
import { sdk } from '../../containers/services/sdk';
import { FetchUserOnboardQuery } from '../../../generated/types';

type PageProps = {
  fallback: {
    [key: string]: FetchUserOnboardQuery;
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

  const { uid } = session.user;
  const res = await sdk.FetchUserOnboard({ userId: uid });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchUserOnboard, uid])]: res,
      },
      uid,
    },
  };
};

const Onboard: React.FC<{ uid: string }> = ({ uid }) => {
  const { data, onRegister } = useOnboard(uid);

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Onboarding</title>
      </Head>
      <OnboardTemplate user={data?.user} onSubmit={onRegister} />
    </>
  );
};

const OnboardPage: NextPageWithLayout<PageProps> = ({ uid, fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Suspense fallback={<Typography variant="overline">loading...</Typography>}>
      <Onboard uid={uid} />
    </Suspense>
  </SWRConfig>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ bgColor: 'default', minHeight: '100vh' }}>
    <main>
      <Flex
        sx={{
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Flex>
    </main>
  </Box>
);

OnboardPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default OnboardPage;
