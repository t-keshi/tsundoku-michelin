import { gql } from 'graphql-request';

export const fetchBooks = gql`
  query FetchBooksEdge($cursor: String) {
    booksEdge(cursor: $cursor, limit: 50) {
      endCursor
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
