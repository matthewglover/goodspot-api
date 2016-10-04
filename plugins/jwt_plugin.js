const hapiJwt = require('@matthewglover/hapi-jwt');

const options = {
  issueTokenPath: '/issue_token.html',
  jwtSecret: process.env.JWT_SECRET,
};

const jwtPlugin = { register: hapiJwt, options };

module.exports = jwtPlugin;
