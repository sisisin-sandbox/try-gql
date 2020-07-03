import { useQuery } from '@apollo/react-hooks';
import { Container, Grid, makeStyles } from '@material-ui/core';
import gql from 'graphql-tag';
import MaterialTable from 'material-table';
import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryResult } from '../../components/QueryResult';
import { RepositoryFragment } from './Repository';
import { FetchRepositories, FetchRepositoriesVariables } from './__generated__/FetchRepositories';

const REPO = gql`
  query FetchRepositories($orgLogin: String!) {
    viewer {
      name
      organization(login: $orgLogin) {
        name
        repositories(last: 10) {
          nodes {
            ...RepositoryFragment
          }
        }
      }
    }
  }
  ${RepositoryFragment}
`;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const Repos: React.FC = () => {
  const classes = useStyles();
  const { orgId } = useParams() as { orgId: string };
  const res = useQuery<FetchRepositories, FetchRepositoriesVariables>(REPO, {
    variables: {
      orgLogin: orgId,
    },
  });

  const data = (res.data?.viewer.organization?.repositories.nodes ?? []).flatMap((repo) => {
    const repoName = repo!.name;
    const issues = repo!.issues!.nodes!.map((iss) => {
      return {
        issueTitle: iss?.title,
        repoName,
      };
    });
    return issues.length === 0 ? [{ repoName, issueTitle: undefined }] : issues;
  });

  console.log(data);

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Editable></Editable>
          <MaterialTable<{ issueTitle: string | undefined; repoName: string }>
            data={data}
            columns={[
              {
                title: 'Repo',
                field: 'repoName',
                editComponent: (p) => {
                  console.log(p);
                  return <div>x</div>;
                },
              },
              { title: 'Issue title', field: 'issueTitle' },
            ]}
            editable={{
              onRowUpdate: () => Promise.resolve(),
            }}
            options={{ pageSize: 20 }}
          ></MaterialTable>
        </Grid>
      </Grid>
      <QueryResult {...res}></QueryResult>
    </Container>
  );
};

function Editable() {
  const { useState } = React;

  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);

  return (
    <MaterialTable
      title="Editable Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
      ]}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
