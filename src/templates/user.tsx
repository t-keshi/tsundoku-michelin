import React from 'react';
import { FetchUserQuery } from '../../generated/types';
import { Avatar, Box, Card, Flex, Grid, Typography } from '../components/ui';

type Props = {
  user: FetchUserQuery['user'];
};

export const UserTemplate: React.FC<Props> = ({ user }) => (
  <>
    <Flex sx={{ columnGap: { mobile: 2, tablet: 4, desktop: 6 }, alignItems: 'center' }}>
      <Avatar size="lg" src={user.image || '/brand-icon.png'} />
      <Box>
        <Typography variant="h2" gutterBottom>
          {user.name}
        </Typography>
        {user.profile && (
          <Typography variant="h3" gutterBottom>
            {user.profile}
          </Typography>
        )}
      </Box>
    </Flex>
    <Box sx={{ mt: 6, mb: 3 }}>
      <Typography variant="h4">Bookshelf</Typography>
    </Box>
    <Grid
      sx={{
        gridTemplateColumns: { mobile: 1, tablet: 2, desktop: 3 },
        gridGap: 4,
      }}
    >
      {user.bookshelfs.map(({ book }) => (
        <Card
          key={book.id}
          sx={{ position: 'relative' }}
          media={book.image}
          title={book.title}
          href={`/books/${book.id}`}
        />
      ))}
    </Grid>
  </>
);
