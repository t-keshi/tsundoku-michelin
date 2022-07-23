import { formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FetchBookWithLogsQuery } from '../../generated/types';
import { Accordion, Avatar, Box, Card, Flex, Paper, Stack, Typography } from '../components/ui';
import { MarkdownRenderer } from '../components/organisms/MarkdownRenderer';
import { minHeight32 } from '../components/system/style/style.css';

// eslint-disable-next-line @typescript-eslint/ban-types
const BookDynamicComponent = dynamic<{}>(
  () => import('./book-dynamic').then((modules) => modules.BookDynamicComponent),
  {
    ssr: false,
  },
);

type Props = {
  bookWithLogs: FetchBookWithLogsQuery['book'];
};

export const BookTemplate: React.FC<Props> = ({ bookWithLogs }) => (
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
              <Flex className={minHeight32} sx={{ columnGap: 2 }}>
                <BookDynamicComponent />
              </Flex>
            </Box>
          </Flex>
        </Paper>
        <Box sx={{ mt: 2 }} />
        <Stack spacing={2}>
          {bookWithLogs.bookLogs.map((log, index) => (
            <Paper key={log.id} sx={{ p: 3, width: '100%' }}>
              <Flex sx={{ alignItems: 'center', columnGap: 1, mb: 2 }}>
                <Link href={`/users/${log.user.id}`}>
                  <Flex sx={{ alignItems: 'center', columnGap: 1 }}>
                    <Avatar
                      size="sm"
                      sx={{ cursor: 'pointer' }}
                      src={log.user.image || '/brand-icon.png'}
                    />
                    <Typography variant="body2" color="primary" clickable>
                      {log.user.name}
                    </Typography>
                  </Flex>
                </Link>
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
