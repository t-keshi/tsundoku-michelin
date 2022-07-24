import React, { Suspense } from 'react';
import Head from 'next/head';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { ProfileTemplate } from '../../templates/profile';
import { Loader } from '../../components/ui';
import { useProfile } from '../../containers/presenters/useProfile';
import { useProtectedRoute } from '../../helpers/hooks/useProtectedRoute';

type PageProps = {
  uid: string;
};

const Profile: React.FC<PageProps> = ({ uid }) => {
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

const ProfilePage: NextPageWithLayout = () => {
  const session = useProtectedRoute();

  if (!session) {
    return null;
  }

  return (
    <Suspense fallback={<Loader page />}>
      <Profile uid={session.user.uid} />
    </Suspense>
  );
};

ProfilePage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default ProfilePage;
