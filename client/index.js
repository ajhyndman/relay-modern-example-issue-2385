const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { QueryRenderer, graphql } = require('react-relay');

const environment = require('./environment.js');

const query = graphql`
  query clientQuery($value: Boolean!) {
    shouldError(value: $value)
  }
`;

const App = ({ triggerGraphQLError = false, triggerFetchError = false }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{
      value: triggerGraphQLError,
      triggerFetchError,
    }}
    render={({ props, error }) => {
      if (error) return <span>Error</span>;
      if (!props) return <span>Loading...</span>;
      return <span>{props.shouldError}</span>;
    }}
  />
);

module.exports = App;
