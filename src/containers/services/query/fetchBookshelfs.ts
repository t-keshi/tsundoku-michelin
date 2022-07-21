import { gql } from 'graphql-request';

export const fetchBookshelfs = gql`
  query FetchBookshelfs($bookId: String!) {
    bookshelfs(bookId: $bookId) {
      user {
        id
      }
    }
  }
`;
