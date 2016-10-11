
const port = process.env.PORT || 4000;

const connectionOptions = {
  port,
  routes: {
    cors: {
      origin: ['http://localhost:3000'],
      maxAge: '86400',
    },
  },
};


module.exports = {
  connectionOptions,
};
