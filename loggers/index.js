/* eslint-disable no-console */
const logStartup = server =>
  console.log(`Server running at ${server.info.uri}`);

const logUnhandledError = err =>
  console.log('Error:', err);
/* eslint-enable */

module.exports = {
  logStartup,
  logUnhandledError,
};
