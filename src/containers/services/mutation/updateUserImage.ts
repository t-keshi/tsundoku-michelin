import { gql } from 'graphql-request';

export const updateUserImage = gql`
  mutation UpdateUserImage($image: String!) {
    updateUser(image: $image) {
      id
    }
  }
`;
