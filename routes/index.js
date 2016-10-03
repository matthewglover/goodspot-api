const processLoginRoute = require('./process_login_route');
const protectRoute = require('./protected_route');

module.exports = [
  processLoginRoute,
  protectRoute,
];
