import { gql } from "graphql-request";

export const fetchEditBookLogInfo = gql`
  query FetchEditBookLogInfo($bookId: String!, $userId: String!) {
    bookLog(bookId: $bookId, userId: $userId) {
      id
      log
    }
    book(bookId: $bookId) {
      id
      title
      bookContents {
        id
        bookId
        index
        type
        heading
      }
    }
  }
`;
