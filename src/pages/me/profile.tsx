import React from "react";
import Head from "next/head";
import { Layout } from "../../components/layout/Layout";
import { NextPageWithLayout } from "../../type";
import { ProfileTemplate } from "../../templates/profile";

const Profile: NextPageWithLayout = () => (
    <>
      <Head>
        <title>積読ミシュラン | Profile</title>
      </Head>
      <ProfileTemplate />
    </>
  );

Profile.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Profile;
