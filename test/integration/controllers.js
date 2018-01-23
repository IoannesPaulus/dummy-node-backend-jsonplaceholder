const { assert } = require('chai');
const request = require('supertest');

const app = require('../../app');
const config = require('../../src/config');

describe('Posts controller', () => {

  const _token = config.get('token');

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

  const _badtoken = 'sgdsgd';

  it('should return an error when invalid token is specified', () => {
    return request(app)
      .get('/api/posts')
      .set('Authorization', `Bearer ${_badtoken}`)
      .expect(501);
  });
});
