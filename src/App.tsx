import React from 'react';
import { useQuery, ApolloProvider } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { client } from './services/client';

const REPO = gql`
  query($number_of_repos: Int!) {
    viewer {
      name
      repositories(last: $number_of_repos) {
        nodes {
          name
        }
      }
    }
  }
`;

const Q: React.FC = () => {
  const { loading, error, data } = useQuery(REPO, {
    variables: {
      number_of_repos: 3,
    },
  });
  return <pre>{JSON.stringify(data, null, '  ')}</pre>;
};

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Q></Q>
      </div>
    </ApolloProvider>
  );
};
