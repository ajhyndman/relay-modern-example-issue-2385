const { graphql } = require('graphql');
const { Environment, Network, RecordSource, Store } = require('relay-runtime');

const mockServer = require('../server/index.js');

// const query = `
//   query MyQuery($value: Boolean!) {
//     shouldError(value: $value)
//   }
// `;

// // imperatively execute a query
// graphql(server, query, null, null, { value: false }).then(result => {
//   console.log('\n\nTHIS QUERY SHOULD RETURN DATA:');
//   console.log(result);
// });
// graphql(server, query, null, null, { value: true }).then(result => {
//   console.log('\n\nTHIS QUERY SHOULD RETURN A GRAPHQL ERROR:');
//   console.log(result);
// });

const fetchFunction = (operation, variables) => {
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
