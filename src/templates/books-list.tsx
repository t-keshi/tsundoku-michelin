import Link from 'next/link';
import React, { Fragment } from 'react';
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineArticle,
  MdOutlineBookmarkAdd,
} from 'react-icons/md';
import { FetchBooksQuery } from '../../generated/types';
import { Box, Card, Flex, Grid, IconButton, Typography } from '../components/ui';

type Props = {
  books: FetchBooksQuery['books'];
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export const BooksListTemplate: React.FC<Props> = ({ books, page, hasPrevPage, hasNextPage }) => (
  <>
    <Typography variant="h2">Books</Typography>
    <Box sx={{ mt: 3 }} />
    <Grid
      sx={{
        gridTemplateColumns: { mobile: 1, tablet: 2, desktop: 3 },
        gridGap: 4,
      }}
    >
      {books.map((book) => (
        <Fragment key={book.id}>
          <Card
            media={book.image}
            title={book.title}
            href={`/books/${book.id}`}
            footer={
              <Flex
                sx={{
                  color: 'text-secondary',
                  columnGap: 2,
                }}
              >
                <Flex inline sx={{ columnGap: 0.5, alignItems: 'center' }}>
                  <MdOutlineArticle />
                  <Typography variant="overline">{book.bookLogCount}</Typography>
                </Flex>
                <Flex inline sx={{ columnGap: 0.5, alignItems: 'center' }}>
                  <MdOutlineBookmarkAdd />
                  <Typography variant="overline">{book.bookshelfCount}</Typography>
                </Flex>
              </Flex>
            }
          />
        </Fragment>
      ))}
    </Grid>
    <Box sx={{ mt: 3 }} />
    <Flex sx={{ justifyContent: 'space-between' }}>
      {hasPrevPage ? (
        <Link href={`/books-list/${page - 1}`}>
          <IconButton>
            <MdChevronLeft />
          </IconButton>
        </Link>
      ) : (
        <div />
      )}
      {hasNextPage && (
        <Link href={`/books-list/${page + 1}`}>
          <IconButton>
            <MdChevronRight />
          </IconButton>
        </Link>
      )}
    </Flex>
  </>
);
