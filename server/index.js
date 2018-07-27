const { readFileSync } = require('fs');
const { join } = require('path');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = String(readFileSync(join(__dirname, './schema.graphql')));

const resolvers = {
  Query: {
    shouldError(context, { value }) {
      if (!value) {
        return 'SUCCESS';
      }
      throw new Error('GRAPHQL_RESOLVER_ERROR');
    }
  }
};

const mockServer = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = mockServer;
