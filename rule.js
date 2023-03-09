// @ts-check

"use strict";

module.exports = {
  // eslint-disable-next-line no-warning-comments
  // TODO Adapt here
  "names": [ "<names>" ],
  "description": "<description>",
  "information": new URL(
    "https://todo.add.url"
  ),
  "tags": [ "<tags>" ],
  "function": (params, onError) => {
    // eslint-disable-next-line no-warning-comments
    // TODO Add Logic Here
    onError({
      "lineNumber": 16,
      "detail": null,

      "context": "you need to configure your rule",
      "range": [ 1, 1 ]

      //
      // "fixInfo": {
      // "lineNumber": lineNumber,
      // "editColumn": column,
      // "deleteCount": length,
      // "insertText": replacement
      // }
      //
    });
  }
};
