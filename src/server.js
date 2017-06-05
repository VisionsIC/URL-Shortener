// Application Requirements and variables.
const express = require('express');
const app = express();
// Configuration Variables.
const port = process.env.PORT || 3000;
// Assign all routes to the routes folder w/ API prefix.
app.use('/api/v1', require('../public/api.js')(express));
// Application Listening to the port at 3000.
const server = app.listen(port, function() {
  // Log a string output to let the developer know the server is currently active and working.
  console.log('Server is successfully active on port', port);
});
// This makes use of both string and object concatenation to insert the URL string into "urlshortener" HTML file.
app.use(express.static('public'));
app.get('/urlshortener.html', function (req, res){
    res.sendFile(__dirname + "/" + "urlshortener.html");
});
// Export the "server" variable to be used by "__api.js" for testing purposes w/ Mocha.
module.exports = server;
module.exports = app;