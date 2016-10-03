const hapiOauth = require('@matthewglover/hapi-oauth');

const options = {
  configs: [
    {
      provider: 'facebook',                       // name of provider (currently only facebook)
      loginPath: '/fb-login',                     // path to start login process
      authPath: '/fb-auth',                       // path to complete login process
      redirectPath: '/create-token',              // path to handle any post-login
      baseUrl: process.env.BASE_URL,              // base path of your domain
      clientId: process.env.FB_CLIENT_ID,         // facebook client id
      clientSecret: process.env.FB_CLIENT_SECRET, // facebook client secret
      options: {},                                // any additional params to be sent to provider
    },
  ],
};

// Create plugin with options
const oauthPlugin = { register: hapiOauth, options };

module.exports = oauthPlugin;
