import {
  Box,
  Flex,
  Paper,
  Typography,
  IconButton,
  IconButtonGroup,
  AppBar,
  Toolbar,
  Container,
  Button,
  Form,
} from "../components/ui";
import React, { useCallback, useMemo, useState } from "react";
import { MarkdownEditor } from "@react-libraries/markdown-editor";
import {
  MdChevronLeft,
  MdHelp,
  MdModeEdit,
  MdPlayCircleFilled,
} from "react-icons/md";
import Link from "next/link";
import { MarkdownRenderer } from "../components/organisms/MarkdownRenderer";
import {
  BookContent,
  CreateBookLogMutation,
  FetchBookWithContentsQuery,
  UpdateBookLogMutation,
} from "../../generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaOf, yup } from "../helpers/utils/yupExtend";
import { useRouter } from "next/router";

type Props = {
  bookTitle: string;
  bookContents: FetchBookWithContentsQuery["book"]["bookContents"];
  onSubmit: (
    log: string
  ) => Promise<CreateBookLogMutation> | Promise<UpdateBookLogMutation>;
};

const WRITTING_MODE = {
  EDIT: "EDIT",
  PREVIEW: "PREVIEW",
} as const;

type WrittingMode = typeof WRITTING_MODE[keyof typeof WRITTING_MODE];

type FormValues = {
  log: string;
};

const schema: SchemaOf<FormValues> = yup.object().shape({
  log: yup.string().required().min(2).max(30000),
});

const generateDefaultLog = (
  bookContents: FetchBookWithContentsQuery["book"]["bookContents"]
) => {
  return bookContents.reduce((accum, { index, type, heading }) => {
    const sharp = type === "CHAPTER" ? "##" : "###";
    if (accum === "") {
      return `${sharp} ${index}. ${heading}`;
    }

    return `${accum}
    ${sharp} ${index} ${heading}
    `;
  }, "");
};

export const EditTemplate: React.FC<Props> = ({
  bookTitle,
  bookContents,
  onSubmit,
}) => {
  const router = useRouter();
  const handleGoBack = useCallback(() => router.back(), [router]);

  const defaultLog = useMemo(
    () => generateDefaultLog(bookContents),
    [bookContents]
  );

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { log: defaultLog },
  });
  const handleInputLog = useCallback(
    (value: string) => setValue("log", value),
    [setValue]
  );

  const [currentWrittingMode, setCurrentWrittingMode] = useState<WrittingMode>(
    WRITTING_MODE.EDIT
  );
  const handelClickWrittingMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentWrittingMode(e.currentTarget.id as WrittingMode);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    // NOTE: BUG https://github.com/react-hook-form/react-hook-form/issues/1025
    e.preventDefault();
    handleSubmit(({ log }) => {
      onSubmit(log);
    })(e);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Box sx={{ bgColor: "primary-light", minHeight: "100vh" }}>
        <AppBar color="primary" shadow="neumorphism">
          <Toolbar>
            <Container
              disablePadding
              maxWidth="desktop"
              sx={{ height: "100%" }}
            >
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
                <Button type="submit">保存して公開</Button>
              </Flex>
            </Container>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container as="main" maxWidth="tablet" sx={{ p: 2, pt: 7 }}>
          <Typography
            variant="h4"
            responsive
            sx={{
              py: 3,
              fontWeight: "bold",
            }}
          >
            {bookTitle}
          </Typography>
          <Flex
            sx={{
              columnGap: 2,
              rowGap: 2,
              flexDirection: {
                mobile: "column",
                tablet: "row",
                desktop: "row",
              },
            }}
          >
            <Box sx={{ width: "100%", overflowX: "scroll" }}>
              <Paper sx={{ p: 3 }}>
                {currentWrittingMode === WRITTING_MODE.EDIT && (
                  <MarkdownEditor
                    value={watch("log")}
                    onUpdate={handleInputLog}
                  />
                )}
                {currentWrittingMode === WRITTING_MODE.PREVIEW && (
                  <MarkdownRenderer>{watch("log")}</MarkdownRenderer>
                )}
                {errors.log && (
                  <Typography color="error">{errors.log.message}</Typography>
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
        </Container>
      </Box>
    </Form>
  );
};
