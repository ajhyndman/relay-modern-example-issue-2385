/**
 * @flow
 * @relayHash 0c331eb3b7b4a9002d8b8d81b37e80df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type relayModernExampleIssue2385QueryVariables = {|
  value: boolean
|};
export type relayModernExampleIssue2385QueryResponse = {|
  +shouldError: string
|};
*/


/*
query relayModernExampleIssue2385Query(
  $value: Boolean!
) {
  shouldError(value: $value)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "value",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "shouldError",
    "args": [
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value",
        "type": "Boolean!"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "relayModernExampleIssue2385Query",
  "id": null,
  "text": "query relayModernExampleIssue2385Query(\n  $value: Boolean!\n) {\n  shouldError(value: $value)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "relayModernExampleIssue2385Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "relayModernExampleIssue2385Query",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd1aac31aa16cc25b56b5ec92b5a1e75d';
module.exports = node;
