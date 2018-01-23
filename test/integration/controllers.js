const { assert } = require('chai');
const request = require('supertest');

const app = require('../../app');
const config = require('../../src/config');

const _token = config.get('token');
const _badtoken = 'sgdsgd';

describe('Posts controller', () => {

  it('should fetch all posts', () => {
    return request(app)
      .get('/api/posts')
      .set('Authorization', `Bearer ${_token}`)
      .expect(200)
      .then((data) => {
        assert(Array.isArray(data.body));
      });
  });

  it('should return an error when token is not specified', () => {
    return request(app)
      .get('/api/posts')
      .expect(501);
  });

  it('should return an error when invalid token is specified', () => {
    return request(app)
      .get('/api/posts')
      .set('Authorization', `Bearer ${_badtoken}`)
      .expect(501);
  });

  it('should fetch one post', () => {
    return request(app)
      .get('/api/posts/1')
      .set('Authorization', `Bearer ${_token}`)
      .expect(200)
      .then((data) => {
        assert.equal(data.body.userId, 1);
      });
  });

  it('should not find post', () => {
    return request(app)
      .get('/api/posts/101')
      .set('Authorization', `Bearer ${_token}`)
      .expect(404);
  });

  it('should create a post', () => {
    return request(app)
      .post('/api/posts')
      .send({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
      .set('Authorization', `Bearer ${_token}`)
      .expect(200)
      .then((data) => {
        assert.equal(data.body.id, 101);
      });
  });

  it('should update a post', () => {
    return request(app)
      .put('/api/posts/1')
      .send({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
      .set('Authorization', `Bearer ${_token}`)
      .expect(200)
      .then((data) => {
        assert.equal(data.body.userId, 1);
      });
  });

  it('should delete a post', () => {
    return request(app)
      .delete('/api/posts/1')
      .set('Authorization', `Bearer ${_token}`)
      .expect(200);
  });
});

describe('Collection controller', () => {
  it('should fetch a collection of 30 items', () => {
    return request(app)
      .get('/api/collection')
      .set('Authorization', `Bearer ${_token}`)
      .expect(200)
      .then((data) => {
        assert(Array.isArray(data.body));
        assert.lengthOf(data.body, 30);
      });
  });
});
