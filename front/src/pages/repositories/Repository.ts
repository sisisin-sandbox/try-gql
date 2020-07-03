import gql from 'graphql-tag';
export const RepositoryFragment = gql`
  fragment RepositoryFragment on Repository {
    name
    createdAt

    issues(first: 10) {
      nodes {
        title
      }
    }
  }
`;
