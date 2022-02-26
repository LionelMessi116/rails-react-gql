import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`
  query allBooks {
    books {
      id
      title
    }
  }
`;
