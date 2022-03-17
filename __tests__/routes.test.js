/* eslint-disable no-unused-vars */
const request = require('supertest');
const app = require('../server/app');
const dbConnection = require('../server/database/config/connection');

afterAll(() => dbConnection.end());

describe('Test routes', () => {
  test('test /api/v1/posts route,status code 200 , content_type : /json/', (done) => {
    request(app)
      .get('/api/v1/posts')
      .expect(200)
      .expect('content-type', /json/)
      .end((error, result) => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });

  test('test home route,status code 200 , content_type : /text/', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('content-type', /text/)
      .end((error, result) => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });

  test('test /api/v1/signup  route,post data . status 201 ,  content_type : /json/', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send({ email: 'salmssa@gmail.com', name: 'salma', password: '123456' })
      .expect(201)
      .expect('content-type', /json/)
      .end((error, result) => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });

  test('test /api/v1//login  route,post data . status 200 ,  content_type : /json/', (done) => {
    request(app)
      .post('/api/v1/login')
      .send({ email: 'salmssa@gmail.com', password: '123456' })
      .expect(200)
      .expect('content-type', /json/)
      .end((error, result) => {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });
});
