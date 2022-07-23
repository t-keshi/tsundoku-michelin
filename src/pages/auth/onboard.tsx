import React, { Suspense } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Box, Flex, Typography } from '../../components/ui';
import { NextPageWithLayout } from '../../type';
import { useOnboard } from '../../containers/presenters/useOnboard';
import { OnboardTemplate } from '../../templates/onboard';

type PageProps = {
  uid: string;
};

const Onboard: React.FC<PageProps> = ({ uid }) => {
  const { data, onRegister } = useOnboard(uid);

  if (!data) {
    throw new Error('getStaticProps return unexpected response');
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

const OnboardPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    router.push('/');

    return null;
  }

  if (status === 'loading' || !session) {
    return null;
  }

  return (
    <Suspense fallback={<Typography variant="overline">loading...</Typography>}>
      <Onboard uid={session.user.uid} />
    </Suspense>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ bgColor: 'primary-light', minHeight: '100vh' }}>
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
