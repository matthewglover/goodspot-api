module.exports = {
  method: 'GET',
  path: '/protected',
  config: { auth: 'jwt' },
  handler: (req, reply) => {
    reply({ data: 'boom you\'re authorised' });
  },
};
