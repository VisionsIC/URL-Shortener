// Add the Supertest Module.
var request = require('supertest');
// Mocha Test One
describe('API', function(){
  var server;
  // Start Server for testing.
  beforeEach(function(){
    server = require('../src/server.js');
  });
  // Close Server when testing is done.
  afterEach(function(){
    server.close();
  });
  // Commense the Request test.
  it('This should initiate the REQUEST test.', function testRequest(done){
    request(server)
    .get('/api/request')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {hello: 'world'}, done)
  });
  // Commense the Request test.
  it('This should initiate the STATUS test.', function testHealth(done){
    request(server)
    .get('/api/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {healthy: 'true'}, done)
  });
  // Commense the Request test.
  it('This should initiate the USER ID test.', function testUserID(done){
    var fakeUserID = 347
    request(server)
    .get('/api/user/' + fakeUserID)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {user: {id: fakeUserID }}, done)
  });
});
