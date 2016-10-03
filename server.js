const {
  createServer,
  setConnection,
  addRoutes,
  startServer } = require('@matthewglover/hapi-wrapper');

const { connectionOptions } = require('./config');
const { logStartup, logUnhandledError } = require('./loggers');

createServer()
.then(setConnection(connectionOptions))
.then(addRoutes())
.then(startServer)
.then(logStartup)
.catch(logUnhandledError);
