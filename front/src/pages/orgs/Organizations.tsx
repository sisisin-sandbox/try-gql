import { useQuery } from '@apollo/react-hooks';
import { Button, Container, Grid, MenuItem, Select } from '@material-ui/core';
import gql from 'graphql-tag';
import React from 'react';
import { Controller, useForm, useFormContext, FormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { QueryResult } from '~/components/QueryResult';
import { ListOrgs } from './__generated__/ListOrgs';

const LIST_ORGS = gql`
  query ListOrgs {
    viewer {
      login
      organizations(first: 10) {
        nodes {
          id
          name
          resourcePath
        }
      }
    }
  }
`;
let count = 0;
const Watcher: React.FC = () => {
  const { watch, getValues } = useFormContext();
  console.log(getValues());

  return null;
};

export const Organizations: React.FC = () => {
  count++;
  const res = useQuery<ListOrgs>(LIST_ORGS);
  const navigate = useNavigate();
  const form = useForm();
  const { handleSubmit, control } = form;
  console.log(count);
  return (
    <Container>
      <Grid container>
        <Grid item>
          <FormContext {...form}>
            <Watcher></Watcher>
            <form
              onSubmit={handleSubmit((d) => {
                navigate(`/orgs${d.org}/repos`);
              })}
            >
              <Controller
                name="org"
                defaultValue=""
                control={control}
                as={
                  <Select>
                    <MenuItem value=""></MenuItem>
                    {res.data?.viewer?.organizations?.nodes
                      ?.filter((o): o is NonNullable<typeof o> => o !== null)
                      .map((org) => {
                        return (
                          <MenuItem key={org.id} value={org.resourcePath}>
                            {org.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                }
              ></Controller>
              <Button type="submit" color="primary">
                Go
              </Button>
            </form>
          </FormContext>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <QueryResult {...res}></QueryResult>
        </Grid>
      </Grid>
    </Container>
  );
};
