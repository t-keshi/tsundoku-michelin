import Link from "next/link";
import React from "react";
import {
  MdModeEdit,
  MdOutlineDelete,
  MdPlayCircleFilled,
} from "react-icons/md";
import {
  Box,
  Flex,
  IconButton,
  IconButtonGroup,
  Paper,
  Stack,
  Typography,
} from "../components/ui";

export const LogsTemplate: React.FC = () => {
  const charCount = Number(10980).toLocaleString();

  return (
    <>
      <Typography variant="h2">Logs</Typography>
      <Box sx={{ mt: 3 }} />
      <Paper sx={{ p: 3, width: "100%" }}>
        <Stack hasDivider spacing={4}>
          <Flex sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
            <Box sx={{ overflow: "hidden", minWidth: 200 }}>
              <Link href={`/books/${encodeURIComponent("hey")}`}>
                <Typography variant="h5" noWrap clickable>
                  君のemotionを解き放て！
                </Typography>
              </Link>
              <Flex inline sx={{ columnGap: 2, flexShrink: 1 }}>
                <Typography variant="overline" color="secondary">
                  {charCount}文字
                </Typography>
                <Typography variant="overline" color="secondary">
                  5ヶ月前に更新
                </Typography>
              </Flex>
            </Box>
            <IconButtonGroup>
              <Link href={`/logs/edit/${encodeURIComponent("hey")}`}>
                <IconButton>
                  <MdModeEdit />
                </IconButton>
              </Link>
              <IconButton>
                <MdOutlineDelete />
              </IconButton>
            </IconButtonGroup>
          </Flex>
          <Box>
            <Typography variant="h5">君のemotionを解き放て！</Typography>
            <Flex inline sx={{ columnGap: 2 }}>
              <Typography variant="overline" color="secondary">
                {charCount}文字
              </Typography>
              <Typography variant="overline" color="secondary">
                5ヶ月前に更新
              </Typography>
            </Flex>
          </Box>
          <Box>
            <Typography variant="h5">君のemotionを解き放て！</Typography>
            <Flex inline sx={{ columnGap: 2 }}>
              <Typography variant="overline" color="secondary">
                10980文字
              </Typography>
              <Typography variant="overline" color="secondary">
                {charCount}文字
              </Typography>
            </Flex>
          </Box>
        </Stack>
      </Paper>
    </>
  );
};
