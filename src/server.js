// Application Requirements and variables.
var express = require('express');
// BodyParser module added.
var bodyParser = require('body-parser');
var app = express();
// Configuration Variables.
var port = 3000;
// Assign all routes to the routes folder w/ API prefix.
app.use('/api', require('../routes/api.js')(express));
// Application Listening to the port at 3000.
app.listen(port, function() {
  console.log('Server is successfully active on port', port);
});
