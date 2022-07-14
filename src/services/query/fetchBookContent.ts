import { gql } from "graphql-request";

export const fetchBookContents = gql`
  query FetchBookContents($bookId: String!) {
    book(id: $bookId) {
      id
      title
    }
    bookContents(bookId: $bookId) {
      id
      bookId
      index
      type
      heading
    }
  }
`;
