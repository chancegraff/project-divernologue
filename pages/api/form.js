import { applyTo, compose, equals, ifElse, isNil, nthArg, pair, prop, props, tap, tryCatch, useWith, zipObj } from "ramda";
import { connectToTable } from "utils/airtable";

/**
 * 1. Upstream sent req, res
 * 2. Checks if is POST
 * -> Returns 500 if not POST
 * 3. Serializes request body
 * 4. Connects to Airtable
 * 5. Creates record
 * 6. Checks if response error is nil
 * -> Returns 200 if nil
 * -> Returns 500 if not nil
 * -> Returns 400 if error
 */

const returnsStatusServerError = compose(
  applyTo(500),
  prop("status")
);

const returnsStatusNotAllowed = compose(
  applyTo(405),
  prop("status")
);

const returnsStatusBadRequest = compose(
  applyTo(400),
  prop("status")
);

const returnsStatusSuccess = compose(
  applyTo(200),
  prop("status")
);

// (res) => (err) => void
const checksAirtableError = compose(
  isNil,
  nthArg(1)
);

// (record, handler) => void
const createsAirtableRecord = compose(
  prop("create"),
  connectToTable,
);

// (req) => object
const serializesRequestRecord = compose(
  zipObj(["name", "organization"]),
  props(["name", "org"]),
  prop("body"),
  nthArg(0)
);

// (res) => (err) => void
const handlesAirtableResponse = ifElse(
  checksAirtableError,
  compose(
    returnsStatusSuccess,
    nthArg(0)
  ),
  compose(
    returnsStatusServerError,
    nthArg(0)
  )
);

// (req, res) => void
const acceptsClientRequest = useWith(
  createsAirtableRecord,
  pair(
    serializesRequestRecord,
    handlesAirtableResponse
  )
);

// (req, res) => boolean
const checksRequestMethod = compose(
  equals("POST"),
  prop("method"),
  nthArg(0)
);

// (req, res) => void
const handlesClientRequest = ifElse(
  checksRequestMethod,
  acceptsClientRequest,
  compose(
    returnsStatusNotAllowed,
    nthArg(1)
  )
);

// (req, res) => void
const catchesThrownExceptions = tryCatch(
  handlesClientRequest,
  compose(
    returnsStatusBadRequest,
    nthArg(2)
  )
);

export default catchesThrownExceptions;
