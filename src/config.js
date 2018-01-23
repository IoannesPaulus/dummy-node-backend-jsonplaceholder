const convict = require('convict');

const conf = convict({
  name: {
    doc: 'The application name.',
    format: '*',
    default: 'Dummy backend',
    env: 'APP_NAME',
    arg: 'name'
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  logLevel: {
    doc: 'Logging level.',
    format: ['info', 'warn', 'error'],
    default: 'info',
    env: 'LOG_LEVEL',
    arg: 'logLevel'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port'
  },
  token: {
    doc: 'The auth token.',
    format: String,
    default: 'af24353tdsfw',
    env: 'TOKEN',
    arg: 'token'
  },
  dataSource: {
    doc: 'The data source url.',
    format: String,
    default: 'https://jsonplaceholder.typicode.com',
    env: 'DS',
    arg: 'ds'
  }
});

// Perform validation
conf.validate({ allowed: 'strict' });

module.exports = conf;
