import React from 'react';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { GetServerSideProps } from 'next';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../../type';
import { FetchBookshelfBooksQuery } from '../../../generated/types';
import { sdk } from '../../containers/services/sdk';
import { UserTemplate } from '../../templates/user';
import { fetchBookshelfBooks } from '../../containers/services/query/fetchBookshelfBooks';
import { useUser } from '../../containers/presenters/useUser';

type PageProps = {
  fallback: { [key: typeof fetchBookshelfBooks]: FetchBookshelfBooksQuery };
};

export const getServerSideProps: GetServerSideProps<PageProps, { userId: string }> = async (
  context,
) => {
  const userId = context.params?.userId ?? '';
  const res = await sdk.FetchBookshelfBooks({ userId });

  return {
    props: {
      fallback: {
        [fetchBookshelfBooks]: res,
      },
    },
  };
};

const Users: React.FC = () => {
  const { data } = useUser();

  if (!data) {
    throw new Error('suspense boundary throw error unexpectedly');
  }

  return (
    <>
      <Head>
        <title>積読ミシュラン | User</title>
      </Head>
      <UserTemplate />
    </>
  );
};

const UserPage: NextPageWithLayout<PageProps> = ({ fallback }) => (
  <SWRConfig value={{ fallback }}>
    <Users />
  </SWRConfig>
);

UserPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default UserPage;
