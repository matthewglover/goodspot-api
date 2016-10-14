const hapiJwt = require('@matthewglover/hapi-jwt');

const options = {
  issueTokenPath: process.env.ISSUE_TOKEN_PATH,
  jwtSecret: process.env.JWT_SECRET,
  authMode: true,
};

const jwtPlugin = { register: hapiJwt, options };

module.exports = jwtPlugin;
