import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { FetchRepositories, FetchRepositoriesVariables } from './__generated__/FetchRepositories';
import { RepositoryFragment } from './Repository';
import { QueryResult } from './QueryResult';

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
  const res = useQuery<FetchRepositories, FetchRepositoriesVariables>(REPO, {
    variables: {
      numberOfRepos: 3,
    },
  });
  return <QueryResult {...res}></QueryResult>;
};
