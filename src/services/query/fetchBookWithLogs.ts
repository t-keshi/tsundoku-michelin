import { gql } from "graphql-request";

export const fetchBookWithLogs = gql`
  query FetchBookWithLogs($bookId: String!) {
    book(id: $bookId) {
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
          image
        }
      }
    }
  }
`;
