import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { client } from './services/client';
import { Repos } from './components/Repos';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Organizations } from './pages/orgs/Organizations';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Organizations />}></Route>
          <Route path="/repos" element={<Repos></Repos>}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
};
