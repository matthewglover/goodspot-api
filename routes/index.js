const processLoginRoute = require('./process_login_route');
const protectRoute = require('./protected_route');
const api = require('./api');

module.exports = [
  processLoginRoute,
  protectRoute,
  ...api,
];
