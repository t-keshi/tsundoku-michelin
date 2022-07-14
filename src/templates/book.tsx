import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { MdOutlineBookmarkAdd, MdTaskAlt } from "react-icons/md";
import {
  Accordion,
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Paper,
  Typography,
} from "../components/ui";
import { useSnackbar } from "../containers/snackbar";
import { useDisclosure } from "../hooks/useDisclosure";
import { NextPageWithLayout } from "../type";

export const BookTemplate: NextPageWithLayout = () => {
  const router = useRouter();
  const query = router.query as { bookId: string };

  const dummyText =
    "何は今ほぼその講演国という事の頃に見えるないませ。充分同年にらく者ももうこういう尊重たましのみを繰りばおりたからは相談しでしませて、ちょっとには穿いでましたです。校長でした事は何でもかでも一遍にもちたなた。けっして大森さんが説明文芸なぜ学習を定めるですかごその先生それか専攻でとかいうお教育たましですたが、同じ多数は私か差日本人をすれと、岡田さんのので主命の彼らがどうもお出入りと通じて何その道を肝関係に行くように恐らくご払底を下ったでから、いよいよいやしくも謝罪をあるですていですのが思うだた。するとしかしご逼に困る事はそう不愉快とあっないて、その文章をは困るませてといったがたをいうているなない";
  const dummyTextExcerpt = `${dummyText.slice(0, 120)}...`;
  const { isOpen: isExtended, onOpen } = useDisclosure();
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
        IntelliJ IDEAハンズオン ――基本操作からプロジェクト管理までマスター
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
                  <Link
                    href="/edit/[bookId]/[logId]"
                    as={`/edit/${encodeURIComponent(query.bookId)}/new`}
                  >
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
          <Paper sx={{ p: 3, width: "100%" }}>
            <Flex sx={{ columnGap: 2, alignItems: "center" }}>
              <Avatar src="/brand-icon.png" />
              <Typography variant="body2" color="secondary">
                5ヶ月前に更新
              </Typography>
            </Flex>
            {!isExtended ? (
              <>
                <Typography>{dummyTextExcerpt}</Typography>
                <Flex
                  sx={{
                    mt: 2,
                    justifyContent: "center",
                  }}
                >
                  <Button variant="text" onClick={onOpen}>
                    もっと見る
                  </Button>
                </Flex>
              </>
            ) : (
              <Typography>{dummyText}</Typography>
            )}
          </Paper>
          <Box sx={{ mt: 2 }} />
          <Paper sx={{ p: 3, width: "100%" }}>
            <Flex sx={{ alignItems: "center", columnGap: 1 }}>
              <Avatar src="/brand-icon.png" />
              <Typography variant="body2" color="primary">
                t-keshi
              </Typography>
              <Typography variant="body2" color="secondary">
                5ヶ月前に更新
              </Typography>
            </Flex>
            <Accordion
              excerpt={<Typography>{dummyTextExcerpt}</Typography>}
              fullContent={<Typography>{dummyText}</Typography>}
            />
          </Paper>
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
            media="http://books.google.com/books/content?id=APq6swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            title="IntelliJ IDEAハンズオン ――基本操作からプロジェクト管理までマスター"
            color="paper"
          />
        </Box>
      </Flex>
    </>
  );
};
