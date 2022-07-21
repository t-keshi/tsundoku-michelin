import { formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { MdModeEdit, MdOutlineDelete } from 'react-icons/md';
import { FetchUserBookLogsQuery } from '../../generated/types';
import {
  Box,
  Button,
  Dialog,
  Flex,
  IconButton,
  IconButtonGroup,
  Paper,
  Stack,
  Typography,
} from '../components/ui';
import { useDisclosure } from '../helpers/hooks/useDisclosure';

type Props = {
  bookLogs: FetchUserBookLogsQuery['bookLogs'];
  onRemoveBookLog: (bookLogId: string) => void;
};

export const LogsTemplate: React.FC<Props> = ({ bookLogs, onRemoveBookLog }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState<string | undefined>();
  const handleDialogOpen = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onOpen();
      setId(e.currentTarget.id);
    },
    [onOpen],
  );

  const handleRemoveBookLog = useCallback(() => {
    if (id) {
      onClose();
      onRemoveBookLog(id);
    }
  }, [id, onClose, onRemoveBookLog]);

  return (
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
                <IconButton id={log.id} onClick={handleDialogOpen}>
                  <MdOutlineDelete />
                </IconButton>
              </IconButtonGroup>
            </Flex>
          ))}
        </Stack>
        <Dialog isOpen={isOpen} onClose={onClose}>
          <Typography variant="h3" gutterBottom>
            削除
          </Typography>
          <Typography gutterBottom>本当に削除してもよろしいですか？</Typography>
          <Box sx={{ mt: 3 }} />
          <Flex sx={{ justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={handleRemoveBookLog}
              data-testid="Login with Google"
            >
              削除
            </Button>
          </Flex>
        </Dialog>
      </Paper>
    </>
  );
};
