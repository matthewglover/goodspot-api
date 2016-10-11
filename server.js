require('env2')('./config.env');
const {
  createServer,
  setConnection,
  registerPlugins,
  addRoutes,
  startServer } = require('@matthewglover/hapi-wrapper');

const { serverOptions, connectionOptions } = require('./config');
const { logStartup, logUnhandledError } = require('./loggers');
const routes = require('./routes');
const plugins = require('./plugins');

createServer(serverOptions)
.then(setConnection(connectionOptions))
.then(registerPlugins(plugins))
.then(addRoutes(routes))
.then(startServer)
.then(logStartup)
.catch(logUnhandledError);
