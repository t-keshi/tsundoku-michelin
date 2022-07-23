import { gql } from 'graphql-request';

export const fetchProfile = gql`
  query FetchProfile($userId: String!) {
    user(userId: $userId) {
      id
      name
      image
      profile
    }
  }
`;
