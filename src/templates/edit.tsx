import {
  Box,
  Flex,
  Paper,
  Typography,
  IconButton,
  IconButtonGroup,
} from "../components/ui";
import React, { useMemo, useState } from "react";
import { MarkdownEditor } from "@react-libraries/markdown-editor";
import { MdHelp, MdModeEdit, MdPlayCircleFilled } from "react-icons/md";
import Link from "next/link";
import { MarkdownRenderer } from "../components/organisms/MarkdownRenderer";
import { FetchBookWithContentsQuery } from "../../generated/types";

type Props = {
  bookTitle: string;
  bookContents: FetchBookWithContentsQuery["book"]["bookContents"];
};

const WRITTING_MODE = {
  EDIT: "EDIT",
  PREVIEW: "PREVIEW",
} as const;

type WrittingMode = typeof WRITTING_MODE[keyof typeof WRITTING_MODE];

const generateDefaultValue = ({
  accum,
  index,
  type,
  heading,
}: {
  accum: string;
  index: number;
  type: string;
  heading: string;
}) => {
  const sharp = type === "CHAPTER" ? "##" : "###";
  if (accum === "") {
    return `${sharp} ${index}. ${heading}`;
  }

  return `${accum}
  ${sharp} ${index} ${heading}
  `;
};

export const EditTemplate: React.FC<Props> = ({ bookTitle, bookContents }) => {
  const defaultInput = useMemo(
    () =>
      bookContents.reduce((accum, { index, type, heading }) => {
        return generateDefaultValue({ accum, index, type, heading });
      }, ""),
    [bookContents]
  );
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
        {bookTitle}
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
