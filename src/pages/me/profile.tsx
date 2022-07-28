import React, { Suspense } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { SWRConfig, unstable_serialize } from 'swr';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { ProfileTemplate } from '../../templates/profile';
import { Loader } from '../../components/ui';
import { useProfile } from '../../containers/presenters/useProfile';
import { FetchProfileQuery } from '../../../generated/types';
import { authOptions } from '../api/auth/[...nextauth]';
import { sdk } from '../../containers/services/sdk';
import { fetchProfile } from '../../containers/services/query/fetchProfile';

type PageProps = {
  fallback: {
    [key: string]: FetchProfileQuery;
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
  const res = await sdk.FetchProfile({ userId: uid });

  return {
    props: {
      fallback: {
        [unstable_serialize([fetchProfile, uid])]: res,
      },
      uid,
    },
  };
};

const Profile: React.FC<{ uid: string }> = ({ uid }) => {
  const { data, onUpdateUserImage, onUpdateUserInfo } = useProfile(uid);

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Bookshelf</title>
      </Head>
      <ProfileTemplate
        user={data.user}
        onUpdateUserImage={onUpdateUserImage}
        onUpdateUserInfo={onUpdateUserInfo}
      />
    </>
  );
};

const ProfilePage: NextPageWithLayout<PageProps> = ({ fallback, uid }) => (
  <SWRConfig value={{ fallback }}>
    <Suspense fallback={<Loader page />}>
      <Profile uid={uid} />
    </Suspense>
  </SWRConfig>
);

ProfilePage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default ProfilePage;
