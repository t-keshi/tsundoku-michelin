import { useRouter } from 'next/router';
import { Layout } from '../components/layout/Layout';
import { NextPageWithLayout } from '../type';

const HomePage: NextPageWithLayout = () => {
  const router = useRouter();

  if (!router.isReady) {
    return null;
  }

  router.push('/books-list/1');

  return null;
};

HomePage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default HomePage;
