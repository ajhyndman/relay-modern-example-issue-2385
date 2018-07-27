const { graphql } = require('graphql');

const server = require('../server/index.js');

const query = `
  query MyQuery($value: Boolean!) {
    shouldError(value: $value)
  }
`;

// imperatively execute a query
graphql(server, query, null, null, { value: false }).then(result => {
  console.log('\n\nTHIS QUERY SHOULD RETURN DATA:');
  console.log(result);
});
graphql(server, query, null, null, { value: true }).then(result => {
  console.log('\n\nTHIS QUERY SHOULD RETURN A GRAPHQL ERROR:');
  console.log(result);
});
