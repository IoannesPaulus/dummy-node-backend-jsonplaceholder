const express = require('express');
const bodyParser = require('body-parser');

const config = require('./src/config');
const logger = require('./src/logger');
const routes = require('./src/api/router');
const tokenMiddleware = require('./src/api/middleware/tokenMiddleware');
const cacheMiddleware = require('./src/api/middleware/cacheMiddleware');
const throttleMiddleware = require('./src/api/middleware/throttleMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(tokenMiddleware(config.get('token')));

app.use('/', throttleMiddleware(5), cacheMiddleware(10), routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500).json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(config.get('port'), () => logger.info(`server listening on port ${config.get('port')}`));

module.exports = app;
