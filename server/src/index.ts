import { ApolloServer } from 'apollo-server';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';
import resolvers from './graphql/resolver';
import { PrismaClient } from '../prisma/generated/client';

dotenv.config();

const prisma = new PrismaClient();

// Read the schema from the file
const schema = readFileSync(join(__dirname, 'graphql/schema.graphql'), 'utf-8');

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: () => ({ prisma }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
