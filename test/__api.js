var expect = require('expect');
// Add the Supertest Module.
var request = require('supertest');
// Mocha Test One
describe('API', function(){
  var server;
  // Start Server for testing.
  beforeEach( function(){
    var server = require('../src/server.js');
  });
  // Close Server when testing is done.
  afterEach( function(){
    server.close();
  });
  // Commense the test.
  it('should probably load', function() {
    expect(100).toBe(100);
  });
});
