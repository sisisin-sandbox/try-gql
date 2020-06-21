import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { FetchRepositories, FetchRepositoriesVariables } from './__generated__/FetchRepositories';
import { RepositoryFragment } from './Repository';

const REPO = gql`
  query FetchRepositories($numberOfRepos: Int!) {
    viewer {
      name
      repositories(last: $numberOfRepos) {
        nodes {
          ...RepositoryFragment
        }
      }
    }
  }
  ${RepositoryFragment}
`;

export const Repos: React.FC = () => {
  const { loading, error, data } = useQuery<FetchRepositories, FetchRepositoriesVariables>(REPO, {
    variables: {
      numberOfRepos: 3,
    },
  });
  if (loading) return <div>loading...</div>;
  if (error) {
    return (
      <div style={{ color: 'red' }}>
        <pre>{JSON.stringify(error, null, '  ')}</pre>
      </div>
    );
  }
  return (
    <div>
      <pre>{JSON.stringify(data, null, '  ')}</pre>
    </div>
  );
};
