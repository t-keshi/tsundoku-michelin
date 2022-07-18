import { useSession } from "next-auth/react";
import React, { Suspense, useEffect } from "react";
import { sdk, sdkHooks } from "../../containers/services/sdk";
import { Box, Container, Flex, Typography } from "../../components/ui";
import Head from "next/head";
import { NewUserTemplate } from "../../templates/newUser";
import { NextPageWithLayout } from "../../type";
import { fetchUserOnboard } from "../../containers/services/query/fetchUserOnboard";
import { useMutation } from "../../helpers/hooks/useMutation";
import {
  OnboardUserMutationVariables,
  ResetUsernameMutation,
} from "../../../generated/types";
import { useOnboarding } from "../../containers/presenters/useOnboarding";
import { useRouter } from "next/router";

const NewUser: React.FC = () => {
  const { data, onRegister } = useOnboarding();

  if (!data) {
    throw new Error("");
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

const NewUserPage: NextPageWithLayout = () => {
  return (
    <Suspense fallback={<Typography variant="overline">loading...</Typography>}>
      <NewUser />
    </Suspense>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ bgColor: "primary-light", minHeight: "100vh" }}>
      <main>
        <Flex
          sx={{
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Flex>
      </main>
    </Box>
  );
};

NewUserPage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default NewUserPage;
