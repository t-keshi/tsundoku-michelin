import { gql } from "graphql-request";

export const fetchBookshelfBooks = gql`
  query FetchBookshelfBooks($userId: String!) {
    bookshelfs(userId: $userId) {
      id
      userId
      book {
        id
        title
        image
        bookLogCount
        bookshelfCount
      }
    }
  }
`;
