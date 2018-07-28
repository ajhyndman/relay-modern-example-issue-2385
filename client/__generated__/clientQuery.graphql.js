/**
 * @flow
 * @relayHash edabe3058016ecf5a5ca40867a7ce579
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type clientQueryVariables = {|
  value: boolean
|};
export type clientQueryResponse = {|
  +shouldError: string
|};
*/


/*
query clientQuery(
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
  "name": "clientQuery",
  "id": null,
  "text": "query clientQuery(\n  $value: Boolean!\n) {\n  shouldError(value: $value)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "clientQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "clientQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9cb7e1500faff76b43b5800d7b72a31';
module.exports = node;
