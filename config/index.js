
const port = process.env.PORT || 4000;

const corsOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://goodspot-client.herokuapp.com']
    : ['*'];

const connectionOptions = {
  port,
  routes: {
    cors: {
      origin: corsOrigins,
      maxAge: '86400',
      additionalHeaders:
        ['token', 'cache-control', 'x-requested-with', 'Access-Control-Allow-Origin'],
    },
  },
};


module.exports = {
  connectionOptions,
};
