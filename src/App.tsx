import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { client } from './services/client';
import { Repos } from './components/Repos';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Repos></Repos>}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
};
