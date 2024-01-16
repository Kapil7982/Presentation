// src/apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;