import React, { Suspense } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';
import { Box, Flex, Typography } from '../../components/ui';
import { NextPageWithLayout } from '../../type';
import { useOnboard } from '../../containers/presenters/useOnboard';
import { OnboardTemplate } from '../../templates/onboard';
// import { fetchUserOnboard } from '../../containers/services/query/fetchUserOnboard';

type PageProps = {
  uid: string;
};

// export const getServerSideProps: GetServerSideProps<PageProps, { uid: string }> = async (
//   context,
// ) => {
//   const userId = context.params?.userId ?? '';
//   const res = await sdk.FetchUserOnboard({ userId: context.uid });

//   return {
//     props: {
//       fallback: {
//         [unstable_serialize([fetchUserOnboard, uid])]: res,
//       },
//     },
//   };
// };

const Onboard: React.FC<PageProps> = ({ uid }) => {
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
