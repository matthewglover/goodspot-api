const querystring = require('querystring');
const { compose, path } = require('ramda');
const request = require('./request');
const { getResponseBody } = require('./request_helpers');
const trace = require('./trace');

const PLACE_DETAILS_URI =
  'https://maps.googleapis.com/maps/api/place/details/json';

const QUERY_CONSTANTS = {
  key: process.env.GOOGLE_PLACE_API_KEY,
  language: 'en',
};

// queryOptions :: string -> string
const queryOptions = placeid =>
  querystring.stringify(Object.assign({ placeid }, QUERY_CONSTANTS));

// requestOptions :: string -> Object
const requestOptions = placeId =>
  ({
    url: `${PLACE_DETAILS_URI}?${queryOptions(placeId)}`,
  });

// placeDetailsRequest :: string -> Promise Object Error
const placeDetailsRequest =
  compose(request, requestOptions);

// locationFromPlaceId :: string -> Promise [Object] Error
const locationFromPlaceId = placeId =>
  placeDetailsRequest(placeId)
  .then(getResponseBody)
  .then(path(['result', 'geometry', 'location']))
  .then(trace('locationFromPlaceId results:'));


module.exports = locationFromPlaceId;
