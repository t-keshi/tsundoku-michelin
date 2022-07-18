import { gql } from "graphql-request";

export const updateProfileImage = gql`
  mutation UpdateProfileImage($image: Upload) {
    image(image: $image) {
      id
      path
      filename
      mimetype
      encoding
    }
  }
`;
