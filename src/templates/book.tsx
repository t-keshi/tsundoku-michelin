import Link from "next/link";
import { useCallback, useState } from "react";
import { MdOutlineBookmarkAdd, MdTaskAlt } from "react-icons/md";
import { formatDistance } from "date-fns";
import { ja } from "date-fns/locale";
import { FetchBookWithLogsQuery } from "../../generated/types";
import {
  Accordion,
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Paper,
  Stack,
  Typography,
} from "../components/ui";
import { useSnackbar } from "../containers/contexts/snackbar";

type Props = {
  bookWithLogs: FetchBookWithLogsQuery["book"];
};

export const BookTemplate: React.FC<Props> = ({ bookWithLogs }) => {
  const { onOpen: onSnackbarOpen } = useSnackbar();

  const [isAddedBookshelf, setIsAddedBookshelf] = useState(false);

  const handleClickAddBookshelf = useCallback(() => {
    setIsAddedBookshelf(true);
    onSnackbarOpen({ message: "MY本棚に追加しました", status: "success" });
  }, [onSnackbarOpen]);

  const handleClickRemoveBookshelf = useCallback(() => {
    setIsAddedBookshelf(false);
    onSnackbarOpen({ message: "MY本棚から削除しました", status: "success" });
  }, [onSnackbarOpen]);

  return (
    <>
      <Typography
        variant="h2"
        responsive
        sx={{
          px: { mobile: 3, tablet: 5, desktop: 7 },
          py: 3,
          fontWeight: "bold",
        }}
      >
        {bookWithLogs.title}
      </Typography>
      <Box sx={{ mt: 5 }} />
      <Flex sx={{ columnGap: 2 }}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ p: 3, width: "100%" }}>
            <Flex sx={{ justifyContent: "center" }}>
              <Box>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{ textAlign: "center" }}
                >
                  あなたの積読を、みんなの資産に。
                </Typography>
                <Flex sx={{ columnGap: 2 }}>
                  <Link href={`/edit/${bookWithLogs.id}`}>
                    <Button startIcon={<>✍️</>}>読書ログを投稿</Button>
                  </Link>
                  {isAddedBookshelf ? (
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<MdTaskAlt />}
                      onClick={handleClickRemoveBookshelf}
                    >
                      MY本棚に追加済み
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      startIcon={<MdOutlineBookmarkAdd />}
                      onClick={handleClickAddBookshelf}
                    >
                      MY本棚に追加
                    </Button>
                  )}
                </Flex>
              </Box>
            </Flex>
          </Paper>
          <Box sx={{ mt: 2 }} />
          <Stack spacing={2}>
            {bookWithLogs.bookLogs.map((log, index) => (
              <Paper key={log.id} sx={{ p: 3, width: "100%" }}>
                <Flex sx={{ alignItems: "center", columnGap: 1 }}>
                  <Avatar src="/brand-icon.png" />
                  <Typography variant="body2" color="primary">
                    {log.user.name}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {formatDistance(new Date(log.updatedAt), new Date(), {
                      locale: ja,
                    })}
                    前
                  </Typography>
                </Flex>
                <Accordion
                  initialIsOpen={index === 0}
                  excerpt={<Typography>{log.log.slice(0, 200)}</Typography>}
                  fullContent={<Typography>{log.log}</Typography>}
                />
              </Paper>
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            width: 300,
            display: {
              mobile: "none",
              tablet: "block",
              desktop: "block",
            },
          }}
        >
          <Card
            outlined={false}
            media={bookWithLogs.image}
            title={bookWithLogs.title}
            color="paper"
          />
        </Box>
      </Flex>
    </>
  );
};
