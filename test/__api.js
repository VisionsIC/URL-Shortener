// Add the Supertest Module.
const request = require('supertest');
// Mocha Test One
describe('API', function(){
  let server;
  // Start Server for testing.
  beforeEach(function(){
    server = require('../src/server.js');
  });
  // Close Server when testing is done.
  afterEach(function(){
    server.close();
  });
  // Commence the Request test.
  it('This should initiate the REQUEST test.', function testRequest(done){
    request(server)
    .get('/api/request')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {hello: 'world'}, done)
  });
  // Commence the Request test.
  it('This should initiate the STATUS test.', function testHealth(done){
    request(server)
    .get('/api/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {healthy: 'true'}, done)
  });
  // Commence the Request test.
  it('This should initiate the USER ID test.', function testUserID(done){
    const fakeUserID = 347;
    request(server)
    .get('/api/user/' + fakeUserID)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {user: {id: fakeUserID }}, done)
  });
});
