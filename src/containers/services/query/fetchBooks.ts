import { gql } from 'graphql-request';

export const fetchBooks = gql`
  query FetchBooks($offset: Int, $limit: Int) {
    books(offset: $offset, limit: $limit) {
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
