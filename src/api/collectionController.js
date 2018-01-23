const fetch = require('node-fetch');

const config = require('../config');
const { status, json } = require('./fetchHelpers');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function list(req, res, next) {
  return Promise.all([
    fetch(`${config.get('dataSource')}/posts`),
    fetch(`${config.get('dataSource')}/albums`),
    fetch(`${config.get('dataSource')}/users`)
  ]).then(([posts, albums, users]) => {
    return Promise.all([
      status(posts),
      status(albums),
      status(users)
    ]);
  }).then(([posts, albums, users]) => {
    return Promise.all([
      json(posts),
      json(albums),
      json(users)
    ]);
  }).then(([posts, albums, users]) => {
    const collection = [];
    for (let i = 0; i < 30; i += 1) {
      collection.push({
        post: posts[getRandomInt(100)],
        album: albums[getRandomInt(100)],
        user: users[getRandomInt(10)]
      });
    }
    res.json(collection);
  }).catch(next);
}

module.exports = {
  list: list
};
