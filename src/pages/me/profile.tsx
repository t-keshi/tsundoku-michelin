import React from "react";
import { Layout } from "../../components/layout/Layout";
import { NextPageWithLayout } from "../../type";
import { ProfileTemplate } from "../../templates/profile";
import Head from "next/head";

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>積読ミシュラン | Profile</title>
      </Head>
      <ProfileTemplate />
    </>
  );
};

Profile.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
