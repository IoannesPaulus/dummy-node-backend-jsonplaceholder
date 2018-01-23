const myCache = require('../../helpers/myCache');

function cacheMw(duration) {
  const middleware = function innerCacheMiddleware(req, res, next) {
    const key = req.originalUrl || req.url;
    const cachedBody = myCache.get(key);
    if (cachedBody) {
      res.json(cachedBody);
      return;
    }
    res.sendResponse = res.send;
    res.send = (body) => {
      myCache.put(key, body, duration * 1000);
      res.sendResponse(body);
    };
    next();
  };

  return middleware;
}

module.exports = cacheMw;
