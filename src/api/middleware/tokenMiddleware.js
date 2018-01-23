const { ErrorWithStatus } = require('../errors');

function tokenMw(tokenStr) {
  const middleware = function innerTokenMiddleware(req, res, next) {
    const token = req.body.token || req.query.token || req.headers.authorization;
    if (!token || token.indexOf('Bearer ') !== 0) {
      return next(new ErrorWithStatus('Invalid auth token', 501));
    }
    const tokenString = token.split(' ')[1];

    if (tokenString === tokenStr) {
      return next();
    }
    return next(new ErrorWithStatus('Invalid auth token', 501));
  };

  return middleware;
}

module.exports = tokenMw;
