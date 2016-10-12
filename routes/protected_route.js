module.exports = {
  method: 'GET',
  path: '/protected',
  // config: { auth: false },
  handler: (req, reply) => {
    reply({ data: 'boom you\'re authorised' });
  },
};
