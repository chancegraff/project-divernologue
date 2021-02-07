import { compose, pipe, tap } from "ramda";
import { useCallback } from "react";

export default ({ name, org }) => useCallback(
  compose(
    pipe(
      compose(
        zipObj([ "name", "organization" ]),
        props(["name", "org"])
      ),
      fetch,
    ),
    tap(
      prop("preventDefault")
    )
  ),
  [
    name,
    org
  ]
);

/**
 * Equivalent to ...
    function ({ name, org }) {
      return useCallback(
        ...,
        [
          ...
        ]
      )
    }
 */
