const processLoginRoute = {
  method: 'GET',
  path: '/process-login',
  handler: (req, reply) => reply(req.query),
};

module.exports = processLoginRoute;
