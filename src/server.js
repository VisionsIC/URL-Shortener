// Application Requirements and variables.
const express = require('express');
// The "app" variable calls the 'express' method.
const app = express();
// Configuration Variables.
const port = 3000;
// Assign all routes to the routes folder w/ API prefix.
app.use('/api', require('../routes/api.js')(express));
// Application Listening to the port at 3000.
const server = app.listen(port, function() {
  // Log a string output to let the developer know the server is currently active and working.
  console.log('Server is successfully active on port', port);
});
// Export the "server" variable to be used by "__api.js" for testing purposes w/ Mocha.
module.exports = server;
module.exports = app;
module.exports = express;