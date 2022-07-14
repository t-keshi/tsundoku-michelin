import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import { AboutTemplate } from "../templates/about";
import { NextPageWithLayout } from "../type";

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>積読ミシュラン | About</title>
      </Head>
      <AboutTemplate />
    </>
  );
};

About.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
