// Application Requirements and variables.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Configuration Variables.
var port = 3000;
app.get('/', function (req, res) {
  res.send('Server is successfully active on port ', port)
});
app.listen(port);
