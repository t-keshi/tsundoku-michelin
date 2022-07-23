import React from 'react';
import { FetchBookshelfBooksQuery } from '../../generated/types';
import { Box, Card, Grid, Typography } from '../components/ui';

type Props = {
  bookshelfs: FetchBookshelfBooksQuery['bookshelfs'];
};

export const BookshelfTemplate: React.FC<Props> = ({ bookshelfs }) => (
  <>
    <Typography variant="h2">Bookshelf</Typography>
    <Box sx={{ mt: 3 }} />
    <Grid
      sx={{
        gridTemplateColumns: { mobile: 1, tablet: 2, desktop: 3 },
        gridGap: 4,
      }}
    >
      {bookshelfs.map(({ book }) => (
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
