const fetch = require('node-fetch');
const config = require('../config');

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function json(response) {
  return response.json();
}

function getPosts(req, res, next) {
  fetch(`${config.get('dataSource')}/posts`)
    .then(status)
    .then(json)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

module.exports = {
  getPosts: getPosts
};
