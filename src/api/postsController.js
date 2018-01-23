const _ = require('lodash');
const fetch = require('node-fetch');

const config = require('../config');
const { status, json } = require('./fetchHelpers');

function listAll(req, res, next) {
  return fetch(`${config.get('dataSource')}/posts`)
    .then(status)
    .then(json)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function getById(req, res, next) {
  return fetch(`${config.get('dataSource')}/posts/${req.params.id}`)
    .then(status)
    .then(json)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function create(req, res, next) {
  return fetch(`${config.get('dataSource')}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(json)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function update(req, res, next) {
  const body = {};
  if (req.body.title) {
    _.assign(body, { title: req.body.title });
  }
  if (req.body.body) {
    _.assign(body, { body: req.body.body });
  }
  if (req.body.userId) {
    _.assign(body, { userId: req.body.userId });
  }
  return fetch(`${config.get('dataSource')}/posts/${req.params.id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(json)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function del(req, res, next) {
  return fetch(`${config.get('dataSource')}/posts/${req.params.id}`, {
    method: 'DELETE'
  }).then(json)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

module.exports = {
  listAll: listAll,
  getById: getById,
  create: create,
  update: update,
  delete: del
};
