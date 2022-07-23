import { gql } from 'graphql-request';

export const fetchBookshelfs = gql`
  query FetchBookshelfs($bookId: String!, $userId: String!) {
    bookshelf(bookId: $bookId, userId: $userId) {
      id
    }
    bookLog(bookId: $bookId, userId: $userId) {
      id
    }
  }
`;
