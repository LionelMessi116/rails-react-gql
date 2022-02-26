import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken,
    },
  }),
  cache: new InMemoryCache(),
});

export const withProvider =
  (WrappedComponent: React.FC, props: any = {}) =>
  () => {
    return (
      <ApolloProvider client={client}>
        <WrappedComponent {...props} />
      </ApolloProvider>
    );
  };
