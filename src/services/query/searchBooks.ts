import { gql } from "graphql-request";

export const searchBooks = gql`
  query SearchBooks($keyword: String!) {
    booksSearch(keyword: $keyword) {
      id
      title
      image
      url
      bookLogCount
      bookshelfCount
      createdAt
      updatedAt
    }
  }
`;
