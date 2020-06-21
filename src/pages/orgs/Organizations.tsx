import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ListOrgs } from './__generated__/ListOrgs';
import { QueryResult } from '~/components/QueryResult';
import { AppBar, Typography, Container, Grid } from '@material-ui/core';

const LIST_ORGS = gql`
  query ListOrgs {
    viewer {
      login
      organizations(first: 10) {
        nodes {
          name
        }
      }
    }
  }
`;
export const Organizations: React.FC = () => {
  const res = useQuery<ListOrgs>(LIST_ORGS);

  return (
    <div>
      <AppBar position="sticky">
        <Typography component="h1" variant="h6">
          Orgs
        </Typography>
      </AppBar>
      <main>
        <Container>
          <Grid container>
            <Grid item>
              <QueryResult {...res}></QueryResult>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
