import { gql } from "graphql-request";

export const fetchBooks = gql`
  query FetchBooks {
    books {
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
