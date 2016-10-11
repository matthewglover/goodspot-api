require('env2')('./config.env');
const {
  createServer,
  setConnection,
  registerPlugins,
  addRoutes,
  startServer } = require('@matthewglover/hapi-wrapper');

const { connectionOptions } = require('./config');
const { logStartup, logUnhandledError } = require('./loggers');
const routes = require('./routes');
const plugins = require('./plugins');

createServer()
.then(setConnection(connectionOptions))
.then(registerPlugins(plugins))
.then(addRoutes(routes))
.then(startServer)
.then(logStartup)
.catch(logUnhandledError);
