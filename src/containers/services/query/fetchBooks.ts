import { gql } from 'graphql-request';

export const fetchBooks = gql`
  query FetchBooks($cursor: String, $limit: Int) {
    books(cursor: $cursor, limit: $limit) {
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
