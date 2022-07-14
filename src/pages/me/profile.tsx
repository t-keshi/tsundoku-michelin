import React, { useCallback, useRef } from "react";
import { Avatar } from "../../components/ui/Avatar/Avatar";
import { Box } from "../../components/ui/Box/Box";
import { Button } from "../../components/ui/Button/Button";
import { Flex } from "../../components/ui/Flex/Flex";
import { Form } from "../../components/ui/Form/Form";
import { Label } from "../../components/ui/Label/Label";
import { TextField } from "../../components/ui/TextField/TextField";
import { Typography } from "../../components/ui/Typography/Typography";
import { Dialog } from "../../components/ui/Dialog/Dialog";
import { useImageUpload } from "../../hooks/useImageUpload";
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
