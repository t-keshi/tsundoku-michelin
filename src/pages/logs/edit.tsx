import { Box } from "../../components/ui/Box/Box";
import { Flex } from "../../components/ui/Flex/Flex";
import { Paper } from "../../components/ui/Paper/Paper";
import React, { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownEditor } from "@react-libraries/markdown-editor";
import { IconButtonGroup } from "../../components/ui/IconButtonGroup/IconButtonGroup";
import { IconButton } from "../../components/ui/IconButton/IconButton";
import {
  MdChevronLeft,
  MdHelp,
  MdModeEdit,
  MdPlayCircleFilled,
} from "react-icons/md";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { Prism } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Typography } from "../../components/ui/Typography/Typography";
import { Container } from "../../components/ui/Container/Container";
import { Toolbar } from "../../components/ui/Toolbar/Toolbar";
import { AppBar } from "../../components/ui/AppBar/AppBar";
import { Button } from "../../components/ui/Button/Button";
import { NextPageWithLayout } from "../../type";
import { useRouter } from "next/router";
import { MarkdownRenderer } from "../../components/organisms/MarkdownRenderer";

const WRITTING_MODE = {
  EDIT: "EDIT",
  PREVIEW: "PREVIEW",
} as const;
type WrittingMode = typeof WRITTING_MODE[keyof typeof WRITTING_MODE];

const defaultInput = `
## Hey

> my tranfic

going on

### yummy

~~gravity~~
**Can you pray it?**
`;

const Edit: NextPageWithLayout = () => {
  const [input, setInput] = useState(defaultInput);
  const handleInput = (value: string) => {
    setInput(value);
  };
  const [currentWrittingMode, setCurrentWrittingMode] = useState<WrittingMode>(
    WRITTING_MODE.EDIT
  );
  const handelClickWrittingMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentWrittingMode(e.currentTarget.id as WrittingMode);
  };

  return (
    <>
      <Typography
        variant="h4"
        responsive
        sx={{
          py: 3,
          fontWeight: "bold",
        }}
      >
        IntelliJ IDEAハンズオン ――基本操作からプロジェクト管理までマスター
      </Typography>
      <Flex
        sx={{
          columnGap: 2,
          rowGap: 2,
          flexDirection: { mobile: "column", tablet: "row", desktop: "row" },
        }}
      >
        <Box sx={{ width: "100%", overflowX: "scroll" }}>
          <Paper sx={{ p: 3 }}>
            {currentWrittingMode === WRITTING_MODE.EDIT && (
              <MarkdownEditor value={input} onUpdate={handleInput} />
            )}
            {currentWrittingMode === WRITTING_MODE.PREVIEW && (
              <MarkdownRenderer>{input}</MarkdownRenderer>
            )}
          </Paper>
        </Box>
        <Box sx={{ width: 300 }}>
          <IconButtonGroup>
            <IconButton
              id={WRITTING_MODE.EDIT}
              active={currentWrittingMode === WRITTING_MODE.EDIT}
              onClick={handelClickWrittingMode}
            >
              <MdModeEdit />
            </IconButton>
            <IconButton
              id={WRITTING_MODE.PREVIEW}
              active={currentWrittingMode === WRITTING_MODE.PREVIEW}
              onClick={handelClickWrittingMode}
            >
              <MdPlayCircleFilled />
            </IconButton>
          </IconButtonGroup>
          <Box sx={{ mt: 2 }} />
          <Link href="https://zenn.dev/lighter/articles/6349eb8420d841d82be0">
            <a target="_blank">
              <IconButton id={WRITTING_MODE.EDIT}>
                <MdHelp />
              </IconButton>
            </a>
          </Link>
        </Box>
      </Flex>
    </>
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

Edit.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Edit;
