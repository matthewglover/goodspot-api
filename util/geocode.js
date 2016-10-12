const querystring = require('querystring');
const { compose, prop, map, trim, test, complement } = require('ramda');
const request = require('./request');

const GEOCODE_URI = 'http://open.mapquestapi.com/nominatim/v1/search.php';

// queryOptions :: string -> Object
const queryOptions = search =>
  querystring.stringify({
    key: process.env.MAPQUEST_API_KEY,
    format: 'json',
    addressdetails: 1,
    q: search,
    countrycodes: ['gb'],
  });

// requestOptions :: string -> Object
const requestOptions = search =>
  ({
    url: `${GEOCODE_URI}?${queryOptions(search)}`,
    headers: {
      Accept: 'application/json',
    },
  });

// geocodeRequest :: string -> Promise Object Error
const geocodeRequest =
  compose(request, requestOptions);

// getResponseBody :: Object -> [RawPlace]
const getResponseBody =
  compose(JSON.parse, prop('body'));

// toNiceName :: (string, Object) -> string
const toNiceName = (displayName, { continent, supermarket }) => {
  const matches = [continent, supermarket].filter(v => !!v);
  const regex = new RegExp(`^(${matches.join('|')})$`);
  const isNiceName = complement(test(regex));

  return displayName
  .split(',')
  .map(trim)
  .filter(isNiceName)
  .join(', ');
};

// toSimplePlace :: RawPlace -> SimplePlace
const toSimplePlace = rawPlace =>
  ({
    name: toNiceName(rawPlace.display_name, rawPlace.address),
    pos: [Number(rawPlace.lat), Number(rawPlace.lon)],
    countryCode: rawPlace.address.country_code,
  });

// geocode :: string -> Promise [SimplePlace] Error
const geocode = (search) =>
  geocodeRequest(search)
  .then(getResponseBody)
  .then(map(toSimplePlace));


module.exports = geocode;
