import { ApolloProvider } from '@apollo/react-hooks';
import { AppBar, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Organizations } from './pages/orgs/Organizations';
import { Repos } from './pages/repositories/Repos';
import { client } from './services/client';
import { Sample } from './pages/sample/Sample';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <AppBar position="sticky">
        <Typography component="h1" variant="h6">
          Orgs
        </Typography>
      </AppBar>
      <main>{children}</main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline></CssBaseline>
      <ApolloProvider client={client}>
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Organizations />}></Route>
              <Route path="/sample" element={<Sample></Sample>}></Route>

              <Route path="/orgs/:orgId">
                <Route path="/repos" element={<Repos></Repos>}></Route>
              </Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </Router>
        </Layout>
      </ApolloProvider>
    </>
  );
};
