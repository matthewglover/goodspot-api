const querystring = require('querystring');
const { compose, prop, map, pick } = require('ramda');
const request = require('./request');
const { getResponseBody } = require('./request_helpers');
const trace = require('./trace');

const AUTOCOMPLETE_URI =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json';

const QUERY_CONSTANTS = {
  key: process.env.GOOGLE_PLACE_API_KEY,
  types: 'geocode',
  language: 'en',
};

// queryOptions :: string -> string
const queryOptions = input =>
  querystring.stringify(Object.assign({ input }, QUERY_CONSTANTS));

// requestOptions :: string -> Object
const requestOptions = input =>
  ({
    url: `${AUTOCOMPLETE_URI}?${queryOptions(input)}`,
  });

// autocompleteRequest :: string -> Promise Object Error
const autocompleteRequest =
  compose(request, requestOptions);


// autocomplete :: string -> Promise [Object] Error
const autocomplete = input =>
  autocompleteRequest(input)
  .then(getResponseBody)
  .then(prop('predictions'))
  .then(map(pick(['description', 'place_id'])))
  .then(trace('autocomplete results:'));


module.exports = autocomplete;
