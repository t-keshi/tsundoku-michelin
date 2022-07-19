import React, { Suspense } from 'react';
import Head from 'next/head';
import { Box, Flex, Typography } from '../../components/ui';
import { NewUserTemplate } from '../../templates/newUser';
import { NextPageWithLayout } from '../../type';
import { useOnboarding } from '../../containers/presenters/useOnboarding';

const NewUser: React.FC = () => {
  const { data, onRegister } = useOnboarding();

  if (!data) {
    throw new Error('');
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Onboarding</title>
      </Head>
      <NewUserTemplate user={data?.user} onSubmit={onRegister} />
    </>
  );
};

const NewUserPage: NextPageWithLayout = () => (
  <Suspense fallback={<Typography variant="overline">loading...</Typography>}>
    <NewUser />
  </Suspense>
);

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

NewUserPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default NewUserPage;
