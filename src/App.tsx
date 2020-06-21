import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { client } from './services/client';
import { Repos } from './components/Repos';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Repos></Repos>
    </ApolloProvider>
  );
};
