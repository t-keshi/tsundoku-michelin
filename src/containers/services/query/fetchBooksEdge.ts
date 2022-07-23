import { gql } from 'graphql-request';

export const fetchBooksEdge = gql`
  query FetchBooksEdge($offset: Int) {
    booksEdge(offset: $offset, limit: 50) {
      hasNextPage
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
  }
`;
