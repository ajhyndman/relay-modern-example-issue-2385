const { graphql } = require('graphql');

const environment = require('./client/index.js');

const query = graphql`
  query relayModernExampleIssue2385Query($value: Boolean!) {
    shouldError(value: $value)
  }
`;
