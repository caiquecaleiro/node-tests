const request = require('supertest');
const expect = require('expect');

const { app, server } = require('./server');

describe('Server', () => {
  // Should close the server whenever using the test --watch
  after((done) => {
    server.close();
    done();
  });

  describe('GET /', () => {
    it('should return Hello World response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Caique',
            age: 23
          });
        })
        .end(done);
    });
  });
});