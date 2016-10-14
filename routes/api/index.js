const autocomplete = require('../../util/autocomplete');
const placesInLocality = require('../../util/places_in_locality');

const API_PREFIX = '/api/v1';

const autocompleteRoute = {
  method: 'GET',
  path: `${API_PREFIX}/autocomplete`,
  handler: (req, reply) =>
    autocomplete(req.query.input)
    .then(reply),
};

const placesInLocalityRoute = {
  method: 'GET',
  path: `${API_PREFIX}/places-in-locality`,
  handler: (req, reply) =>
    placesInLocality(req.query.place_id)
    .then(reply),
};


module.exports = [
  autocompleteRoute,
  placesInLocalityRoute,
];
