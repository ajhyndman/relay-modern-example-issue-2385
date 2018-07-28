const React = require('react');
const ReactDOM = require('react-dom');
const { graphql } = require('graphql');

const App = require('./index.js');
const mockServer = require('../server/index.js');

describe('mockServer', () => {
  const query = `
    query MyQuery($value: Boolean!) {
      shouldError(value: $value)
    }
  `;

  it('returns data when expected to', () => {
    expect.assertions(1);
    expect(
      graphql(mockServer, query, null, null, { value: false }).then(
        JSON.stringify,
      ),
    ).resolves.toBe('{"data":{"shouldError":"SUCCESS"}}');
  });

  it('returns a GraphQL error when expected to', () => {
    expect.assertions(1);
    expect(
      graphql(mockServer, query, null, null, { value: true }).then(
        JSON.stringify,
      ),
    ).resolves.toBe(
      '{"errors":[{"message":"GRAPHQL_RESOLVER_ERROR","locations":[{"line":3,"column":7}],"path":["shouldError"]}],"data":null}',
    );
  });
});

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App triggerGraphQLError={false} />, div);
  });

  it('renders even after receiving a GraphQL error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App triggerGraphQLError={true} />, div);
  });

  it('renders even after receiving a Fetch error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App triggerFetchError={true} />, div);
  });
});
