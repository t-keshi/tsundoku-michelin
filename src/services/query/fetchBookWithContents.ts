import { gql } from "graphql-request";

export const fetchBookWithContents = gql`
  query FetchBookWithContents($bookId: String!) {
    book(id: $bookId) {
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
