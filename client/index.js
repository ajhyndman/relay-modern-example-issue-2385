const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { QueryRenderer, graphql } = require('react-relay');

const environment = require('./environment.js');

const query = graphql`
  query relayModernExampleIssue2385Query($value: Boolean!) {
    shouldError(value: $value)
  }
`;

const App = () => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{
      value: false,
    }}
    render={({ props, error }) => {
      if (error) return <span>Error</span>;
      if (!props) return <span>Loading...</span>;
      return <span>{props.shouldError}</span>;
    }}
  />
);

module.exports = App;
