import { formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';
import Link from 'next/link';
import React from 'react';
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import { FetchUserBookLogsQuery } from '../../generated/types';
import { Box, Flex, IconButton, IconButtonGroup, Paper, Stack, Typography } from '../components/ui';

type Props = {
  bookLogs: FetchUserBookLogsQuery['bookLogs'];
};

export const LogsTemplate: React.FC<Props> = ({ bookLogs }) => (
  <>
    <Typography variant="h2">Logs</Typography>
    <Box sx={{ mt: 3 }} />
    <Paper sx={{ p: 3, width: '100%' }}>
      <Stack hasDivider spacing={4}>
        {bookLogs.map((log) => (
          <Flex key={log.id} sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Box sx={{ overflow: 'hidden', minWidth: 200 }}>
              <Link href={`/books/${log.book.id}`}>
                <Typography variant="h5" noWrap clickable>
                  {log.book.title.toLocaleString()}
                </Typography>
              </Link>
              <Flex inline sx={{ columnGap: 2, flexShrink: 1 }}>
                <Typography variant="overline" color="secondary">
                  {log.log.length}
                  文字
                </Typography>
                <Typography variant="overline" color="secondary">
                  {formatDistance(new Date(log.updatedAt), new Date(), {
                    locale: ja,
                  })}
                  前
                </Typography>
              </Flex>
            </Box>
            <IconButtonGroup>
              <Link href={`/edit/${log.book.id}`}>
                <IconButton>
                  <MdModeEdit />
                </IconButton>
              </Link>
              <IconButton>
                <MdOutlineDelete />
              </IconButton>
            </IconButtonGroup>
          </Flex>
        ))}
      </Stack>
    </Paper>
  </>
);
