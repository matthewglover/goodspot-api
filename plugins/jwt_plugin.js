const hapiJwt = require('@matthewglover/hapi-jwt');

const options = {
  issueTokenPath: 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET,
};

const jwtPlugin = { register: hapiJwt, options };

module.exports = jwtPlugin;
