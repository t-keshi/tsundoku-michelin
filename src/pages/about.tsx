import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import { AboutTemplate } from "../templates/about";
import { NextPageWithLayout } from "../type";

const About: NextPageWithLayout = () => (
    <>
      <Head>
        <title>積読ミシュラン | About</title>
      </Head>
      <AboutTemplate />
    </>
  );

About.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default About;
