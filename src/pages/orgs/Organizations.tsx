import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ListOrgs } from './__generated__/ListOrgs';
import { QueryResult } from '~/components/QueryResult';

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

  return <QueryResult {...res}></QueryResult>;
};
