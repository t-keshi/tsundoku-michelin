import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import { MdOutlineBookmarkAdd, MdTaskAlt } from "react-icons/md";
import { Layout } from "../../components/layout/Layout";
import { Accordion } from "../../components/ui/Accordion/Accordion";
import { Avatar } from "../../components/ui/Avatar/Avatar";
import { Box } from "../../components/ui/Box/Box";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Flex } from "../../components/ui/Flex/Flex";
import { Paper } from "../../components/ui/Paper/Paper";
import { Typography } from "../../components/ui/Typography/Typography";
import { useSnackbar } from "../../containers/snackbar";
import { useDisclosure } from "../../hooks/useDisclosure";
import { BookTemplate } from "../../templates/book";
import { NextPageWithLayout } from "../../type";

const Book: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>積読ミシュラン</title>
      </Head>
      <BookTemplate />
    </>
  );
};

Book.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Book;
