import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

const baseUrl = 'https://api.github.com/graphql';

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {}),
    new HttpLink({
      uri: `${baseUrl}`,
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      },
    }),
  ]),
  cache: new InMemoryCache(),
});
