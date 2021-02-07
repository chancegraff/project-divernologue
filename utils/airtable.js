import Airtable from "airtable";
import { always, applyTo, compose, construct, objOf, prop, __ } from "ramda";
import { airtableAPIBase, airtableAPIKey, airtableAPITable } from "./env";

export const connectToTable = compose(
  applyTo(airtableAPITable),
  applyTo(airtableAPIBase),
  prop("base"),
  construct(Airtable),
  always(objOf("apiKey", airtableAPIKey)),
);
