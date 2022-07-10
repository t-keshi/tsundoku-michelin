import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import { Layout } from "../components/layout/Layout";
import { Box } from "../components/ui/Box/Box";
import { Button } from "../components/ui/Button/Button";
import { Typography } from "../components/ui/Typography/Typography";
import { NextPageWithLayout } from "../type";

const About: NextPageWithLayout = () => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, []);

  return (
    <>
      <Typography variant="h1" gutterBottom>
        すべての積読に、終止符を。
      </Typography>
      <Typography variant="body2">
        本は読まれるためにあるのであり、書架に並べて飾るためでも、重石の代用とするためでもない。
        <br />
        しかし、技術書は難しい。時々、読むのが億劫になる。
        <br />
        だから、読むときは、メモをとりながら少しずつ読むのがいい。
        <br />
        積読ミシュランは、そんな積読をちょっとずつ減らしていくのを助けるサービス。
        <br />
        読みながら、書いて、また読む...そしていつか、すべての積読に、終止符を。
      </Typography>
      <Box sx={{ mt: 6 }} />
      <Box
        sx={{ display: { mobile: "none", tablet: "block", desktop: "block" } }}
      >
        <Typography variant="h1" gutterBottom>
          あなたの積読を、みんなの資産に。
        </Typography>
        <Typography variant="body2">
          例えそれがどんなに雑に書いた読書メモでも、それはみんなの資産になる。
          <br />
          あるいは、それを誰かが本を買うときの選択の材料にするかもしれないし、
          <br />
          あるいは、他人の本棚にどんな技術書が眠っているのか、覗いてみたくもなる。
          <br />
          その本はいつか読むのである。
          <br />
          それは半年後なのか、一年後なのか、十年後なのか...でもどうせなら今日がいい。
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }} />
      <Button>START HERE</Button>
    </>
  );
};

About.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
