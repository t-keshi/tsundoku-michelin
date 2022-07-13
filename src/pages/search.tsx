import type { NextPage } from "next";
import { useDeferredValue, useEffect, useRef, useState, useMemo } from "react";
import { Layout } from "../components/layout/Layout";
import { Box } from "../components/ui/Box/Box";
import { Card } from "../components/ui/Card/Card";
import { Grid } from "../components/ui/Grid/Grid";
import { TextField } from "../components/ui/TextField/TextField";
import { NextPageWithLayout } from "../type";

const Search: NextPageWithLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, []);

  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <TextField
        variant="outlined"
        rounded
        autoFocus
        ref={textFieldRef}
        sx={{ width: "100%", borderRadius: "100%" }}
        data-testid="search"
      />
      <Box sx={{ mt: 6 }}>
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
          />
          <Card>hey</Card>
          <Card>hey</Card>
          <Card>hey</Card>
        </Grid>
      </Box>
    </>
  );
};

Search.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Search;
