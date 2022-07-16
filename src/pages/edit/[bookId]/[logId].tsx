import {
  Box,
  Flex,
  IconButton,
  Container,
  Toolbar,
  AppBar,
  Button,
} from "../../../components/ui";
import React, { Suspense, useCallback } from "react";
import { MdChevronLeft } from "react-icons/md";
import { NextPageWithLayout } from "../../../type";
import { useRouter } from "next/router";
import { EditTemplate } from "../../../templates/edit";
import Head from "next/head";
import { sdk, sdkHooks } from "../../../services/sdk";
import { fetchBookWithContents } from "../../../services/query/fetchBookWithContents";
import { GetStaticPaths, GetStaticProps } from "next";
import { FetchBookWithContentsQuery } from "../../../../generated/types";
import { SWRConfig } from "swr";

type PageProps = {
  fallback: { [key: typeof fetchBookWithContents]: FetchBookWithContentsQuery };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { bookId: string }
> = async (context) => {
  const bookId = context.params?.bookId ?? "";
  const res = await sdk.FetchBookWithContents({ bookId });

  return {
    props: {
      fallback: {
        [fetchBookWithContents]: res,
      },
      revalidate: 3600,
    },
  };
};

const Edit: React.FC = () => {
  const router = useRouter();
  const query = router.query as { bookId: string };
  const { data } = sdkHooks.useFetchBookWithContents(
    fetchBookWithContents,
    { bookId: query.bookId },
    { suspense: true }
  );

  if (!data) {
    throw new Error("");
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | Edit</title>
      </Head>
      <EditTemplate
        bookTitle={data.book.title}
        bookContents={data.book.bookContents}
      />
    </>
  );
};

const EditPage: NextPageWithLayout<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Edit />
      </Suspense>
    </SWRConfig>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const handleGoBack = useCallback(() => router.back(), [router]);

  return (
    <Box sx={{ bgColor: "primary-light", minHeight: "100vh" }}>
      <AppBar color="primary" shadow="neumorphism">
        <Toolbar>
          <Container disablePadding maxWidth="desktop" sx={{ height: "100%" }}>
            <Flex
              sx={{
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton transparent onClick={handleGoBack}>
                <MdChevronLeft />
              </IconButton>
              <Button>保存して公開</Button>
            </Flex>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container as="main" maxWidth="tablet" sx={{ p: 2, pt: 7 }}>
        {children}
      </Container>
    </Box>
  );
};

EditPage.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default EditPage;
