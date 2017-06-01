// Application Requirements and variables.
var express = require('express');
//node var bodyParser = require('body-parser');
var app = express();
// Configuration Variables.
var port = 3000;
// JSON Request Test.
app.get('/talk', function (req,res) {
  res.json({Hello: 'World!'});
});
// Application Listening to the port at 3000.
app.listen(port, function() {
  console.log('Server is successfully active on port', port);
});
