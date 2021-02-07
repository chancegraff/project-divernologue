import { compose, identity, path, __ } from "ramda";

const airtableAPIKeyName = identity("AIRTABLE_API_KEY");
const airtableAPIBaseName = identity("AIRTABLE_API_DB");
const airtableAPITableName = identity("AIRTABLE_API_TABLE");

const environmentVariable = compose(path(["env", __]), identity(process));

export const airtableAPIKey = environmentVariable(airtableAPIKeyName);
export const airtableAPIBase = environmentVariable(airtableAPIBaseName);
export const airtableAPITable = environmentVariable(airtableAPITableName);
