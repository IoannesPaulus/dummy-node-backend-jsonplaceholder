const myThrottler = require('../../helpers/myThrottler');
const { ErrorWithStatus } = require('../errors');

function throttleMw(rate) {
  myThrottler.set(rate);
  const middleware = function innerThrottleMiddleware(req, res, next) {
    if (!myThrottler.canAccept()) {
      return next(new ErrorWithStatus('Too many requests', 429));
    }
    return next();
  };

  return middleware;
}

module.exports = throttleMw;
