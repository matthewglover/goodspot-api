const hapiJwt = require('@matthewglover/hapi-jwt');
const { prop } = require('ramda');

/* eslint-disable max-len */
const options = {
  strategyName: 'jwt',                            // Name of strategy (defaults to jwt)
  createTokenPath: '/create-token',               // Path for token creation
  prepareTokenData: prop('query'),                // Function to prepare token payload data (receives request object)
  issueTokenPath: '/issue_token.html',            // Path which will issue token (as /issue-token.html?jwt=[token])
  verifyTokenPath: '/verify-token',               // Path which will verify token (as /verify-token?jwt=[token])
  jwtOptions: { algorithm: 'HS256' },             // jwt creation options (as per jsonwebtoken.sign)
  jwtVerificationOptions: { algorithm: 'HS256' }, // jwt verification options (as per jsonwebtoken.verify)
  jwtSecret: process.env.JWT_SECRET,              // secret for creating token
};
/* eslint-enable max-len */

const jwtPlugin = { register: hapiJwt, options };

module.exports = jwtPlugin;
