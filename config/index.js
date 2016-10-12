
const port = process.env.PORT || 4000;

const corsOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://goodspot-client.herokuapp.com']
    : ['*'];


const connectionOptions = {
  port,
  routes: {
    cors: { origin: corsOrigins },
  },
};


module.exports = {
  connectionOptions,
};
