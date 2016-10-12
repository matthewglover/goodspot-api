const geocode = require('../../util/geocode');
const trace = require('../../util/trace');


const geocodeRoute = {
  method: 'GET',
  path: '/api/v1/geocode',
  handler: (req, reply) =>
    geocode(req.query.search)
    .then(trace('result:'))
    .then(reply),
};

module.exports = [
  geocodeRoute,
];
