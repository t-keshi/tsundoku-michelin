import Link from 'next/link';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MdOutlineBookmarkAdd, MdTaskAlt } from 'react-icons/md';
import { formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';
import { useSession } from 'next-auth/react';
import { FetchBookshelfsQuery, FetchBookWithLogsQuery } from '../../generated/types';
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
} from '../components/ui';
import { MarkdownRenderer } from '../components/organisms/MarkdownRenderer';
import { useHasHydrated } from '../helpers/hooks/useHasHydrated';

type Props = {
  bookWithLogs: FetchBookWithLogsQuery['book'];
  bookshelfs: FetchBookshelfsQuery['bookshelfs'] | undefined;
  onAddBookshelf: () => void;
  onRemoveBookshelf: () => void;
};

export const BookTemplate: React.FC<Props> = ({
  bookWithLogs,
  bookshelfs,
  onAddBookshelf,
  onRemoveBookshelf,
}) => {
  const { data: session } = useSession();

  // FIXME: 本棚に追加されているかどうかのチェックは whereでひっぱてきてクエリを最適化できそう
  const isLoading = !bookshelfs;
  const isMyBookshelf = bookshelfs?.find((bookshelf) => bookshelf.user.id === session?.user.uid);

  const [isClickable, setIsClickable] = useState(true);

  const handleClickAddBookshelf = useCallback(() => {
    setIsClickable(false);
    if (isClickable) {
      onAddBookshelf();
    }
    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  }, [isClickable, onAddBookshelf]);

  const handleClickRemoveBookshelf = useCallback(() => {
    setIsClickable(false);
    if (isClickable) {
      onRemoveBookshelf();
    }
    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  }, [isClickable, onRemoveBookshelf]);

  const hasHydrated = useHasHydrated();

  return (
    <>
      <Typography
        variant="h2"
        responsive
        sx={{
          px: { mobile: 3, tablet: 5, desktop: 7 },
          py: 3,
          fontWeight: 'bold',
        }}
      >
        {bookWithLogs.title}
      </Typography>
      <Box sx={{ mt: 5 }} />
      <Flex sx={{ columnGap: 2 }}>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ p: 3, width: '100%' }}>
            <Flex sx={{ justifyContent: 'center' }}>
              <Box>
                <Typography variant="overline" display="block" sx={{ textAlign: 'center' }}>
                  あなたの積読を、みんなの資産に。
                </Typography>
                <Flex sx={{ columnGap: 2 }}>
                  <Link href={`/edit/${bookWithLogs.id}`}>
                    <Button startIcon={<>✍️</>}>読書ログを投稿</Button>
                  </Link>
                  {hasHydrated && !isLoading && isMyBookshelf && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{
                        cursor: isClickable ? 'pointer' : 'wait',
                      }}
                      startIcon={<MdTaskAlt />}
                      onClick={handleClickRemoveBookshelf}
                    >
                      MY本棚に追加済み
                    </Button>
                  )}
                  {hasHydrated && !isLoading && !isMyBookshelf && (
                    <Button
                      variant="outlined"
                      style={{
                        cursor: isClickable ? 'pointer' : 'wait',
                      }}
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
              <Paper key={log.id} sx={{ p: 3, width: '100%' }}>
                <Flex sx={{ alignItems: 'center', columnGap: 1 }}>
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
                  fullContent={
                    <Box>
                      <MarkdownRenderer>{log.log}</MarkdownRenderer>
                    </Box>
                  }
                />
              </Paper>
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            width: 300,
            display: {
              mobile: 'none',
              tablet: 'block',
              desktop: 'block',
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
