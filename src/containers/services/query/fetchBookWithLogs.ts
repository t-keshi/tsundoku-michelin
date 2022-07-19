import { gql } from 'graphql-request';

export const fetchBookWithLogs = gql`
  query FetchBookWithLogs($bookId: String!) {
    book(bookId: $bookId) {
      id
      title
      image
      url
      bookLogs {
        id
        log
        updatedAt
        user {
          id
          name
        }
      }
    }
  }
`;
