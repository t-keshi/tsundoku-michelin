import { gql } from 'graphql-request';

export const updateUserInfo = gql`
  mutation UpdateUserInfo($name: String, $profile: String) {
    updateUser(name: $name, profile: $profile) {
      id
    }
  }
`;
