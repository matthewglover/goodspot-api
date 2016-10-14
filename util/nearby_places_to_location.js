const querystring = require('querystring');
const { compose } = require('ramda');
const request = require('./request');
const { getResponseBody } = require('./request_helpers');
// const trace = require('./trace');

// type Location = { lat: number, lng: number }

const NEARBY_PLACES_URI =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

const QUERY_CONSTANTS = {
  key: process.env.GOOGLE_PLACE_API_KEY,
  language: 'en',
  radius: 1000,
  type: 'bar',
};

// queryOptions :: string -> string
const queryOptions = location =>
  querystring.stringify(Object.assign({ location }, QUERY_CONSTANTS));

// locationToString :: Location -> string
const locationToString = ({ lat, lng }) =>
  `${lat},${lng}`;

// locationQuery :: Location -> string
const locationQuery =
  compose(queryOptions, locationToString);

// requestOptions :: Location -> Object
const requestOptions = location =>
  ({
    url: `${NEARBY_PLACES_URI}?${locationQuery(location)}`,
  });

// nearbyPlacesToLocationRequest :: Location -> Promise Object Error
const nearbyPlacesToLocationRequest =
  compose(request, requestOptions);

// nearbyPlacesToLocation :: Location -> Promise [Object] Error
const nearbyPlacesToLocation = location =>
  nearbyPlacesToLocationRequest(location)
  .then(getResponseBody);

module.exports = nearbyPlacesToLocation;
