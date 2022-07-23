import Link from 'next/link';
import React from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { Avatar, Box, Button, Flex, Typography } from '../components/ui';

export const InternalServerError = () => (
  <Box sx={{ bgColor: 'primary-light', minHeight: '100vh' }}>
    <main>
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar size="lg" src="/brand-icon.png" />
        <Box sx={{ mt: 2 }} />
        <Typography variant="h1" paragraph>
          SORRY
        </Typography>
        <Typography variant="body1" color="secondary">
          サーバーエラーが発生しました。
          <br />
          時間をおいて再度、お試しください:bow:
        </Typography>
      </Flex>
    </main>
  </Box>
);

export default InternalServerError;
