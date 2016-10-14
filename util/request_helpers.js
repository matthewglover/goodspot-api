const { compose, prop } = require('ramda');

// getResponseBody :: Object -> [RawPlace]
const getResponseBody =
  compose(JSON.parse, prop('body'));


module.exports = {
  getResponseBody,
};
