// Application Requirements and variables.
var express = require('express');
//node var bodyParser = require('body-parser');
var app = express();
// Configuration Variables.
var port = 3000;
// Assign all routes to the routes folder w/ API prefix.
app.use('/api', '../routes/api.js');
// Application Listening to the port at 3000.
app.listen(port, function() {
  console.log('Server is successfully active on port', port);
});
