import { gql } from 'graphql-request';

export const fetchBooksCount = gql`
  query FetchBooksCount {
    booksCount {
      count
    }
  }
`;
