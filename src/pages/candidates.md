import type { NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";
import { CandidatesQueryQuery } from "../../generated/types";
import { candidates } from "../services/candidates/getCandidates";
import { sdk, sdkHooks } from "../services/sdk";

export const getStaticProps = async () => {
  const res = await sdk.CandidatesQuery();

  return {
    props: {
      fallback: {
        [candidates]: res,
      },
      revalidate: 3600,
    },
  };
};

const CandidatesPage: React.FC = () => {
  const { data } = sdkHooks.useCandidatesQuery(candidates);

  return (
    <>
      <Head>
        <title>Talent Forward</title>
      </Head>
      <main>{JSON.stringify(data, null, 2)}</main>
    </>
  );
};

type PageProps = {
  fallback: { key: CandidatesQueryQuery };
};

const Page: NextPage<PageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <CandidatesPage />
    </SWRConfig>
  );
};

export default Page;
