import { MdOutlineBookmarkAdd, MdOutlineComment } from "react-icons/md";
import { Layout } from "../components/layout/Layout";
import { Box } from "../components/ui/Box/Box";
import { Card } from "../components/ui/Card/Card";
import { Flex } from "../components/ui/Flex/Flex";
import { Grid } from "../components/ui/Grid/Grid";
import { Typography } from "../components/ui/Typography/Typography";
import { NextPageWithLayout } from "../type";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Typography variant="h2">Books</Typography>
      <Box sx={{ mt: 3 }} />
      <Grid
        sx={{
          gridTemplateColumns: { mobile: 1, tablet: 2, desktop: 3 },
          gridGap: 4,
        }}
      >
        <Card
          media="http://books.google.com/books/content?id=APq6swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          title="IntelliJ IDEAハンズオン ――基本操作からプロジェクト管理までマスター"
          href={`/books/${encodeURIComponent("hey")}`}
          footer={
            <Flex
              inline
              sx={{
                color: "text-secondary",
                columnGap: 2,
              }}
            >
              <Flex inline sx={{ columnGap: 0.5, alignItems: "center" }}>
                <MdOutlineComment />
                <Typography variant="overline">2</Typography>
              </Flex>
              <Flex inline sx={{ columnGap: 0.5, alignItems: "center" }}>
                <MdOutlineBookmarkAdd />
                <Typography variant="overline">2</Typography>
              </Flex>
            </Flex>
          }
        />
        <Card>hey</Card>
        <Card>hey</Card>
        <Card>hey</Card>
      </Grid>
    </>
  );
};

Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
