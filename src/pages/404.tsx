import Link from 'next/link';
import React from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { Avatar, Box, Button, Flex, Typography } from '../components/ui';

export const NotFound = () => (
  <Box sx={{ bgColor: 'default', minHeight: '100vh' }}>
    <main>
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar size="lg" src="/brand-icon.svg" />
        <Box sx={{ mt: 2 }} />
        <Typography variant="h1" paragraph>
          SORRY
        </Typography>
        <Typography variant="body1" color="secondary">
          ページが見つかりません。
        </Typography>
        <Box sx={{ mt: 4 }} />
        <Link href="/">
          <Button variant="contained" color="primary" startIcon={<MdChevronLeft />}>
            トップに戻る
          </Button>
        </Link>
      </Flex>
    </main>
  </Box>
);

export default NotFound;
