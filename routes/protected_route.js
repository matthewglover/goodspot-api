module.exports = {
  method: 'GET',
  path: '/protected',
  config: { auth: 'jwt' },
  handler: (req, reply) => reply('boom you\'re authorised!!'),
};
