module.exports = {
  method: 'GET',
  path: '/protected',
  // config: { auth: 'jwt' },
  handler: (req, reply) => {
    console.log('Request received on /protected');  // eslint-disable-line
    reply({ data: 'boom you\'re authorised' });
    console.log('Response issued');  // eslint-disable-line
  },
};
