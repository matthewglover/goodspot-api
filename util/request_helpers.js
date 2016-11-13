const { compose, prop } = require('ramda');

// getResponseBody :: Object -> Object
const getResponseBody =
  compose(JSON.parse, prop('body'));


module.exports = {
  getResponseBody,
};
