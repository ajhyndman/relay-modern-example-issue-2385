const { graphql } = require('graphql');
const { Environment, Network, RecordSource, Store } = require('relay-runtime');

const mockServer = require('../server/index.js');

const fetchFunction = (operation, variables) => {
  if (variables.triggerNetworkError) {
    return Promise.reject(TypeError('FETCH_ERROR'));
  }
  return graphql(mockServer, operation.text, null, null, variables);
};

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchFunction); // see note below

const environment = new Environment({
  handlerProvider: null,
  network,
  store,
});

module.exports = environment;
