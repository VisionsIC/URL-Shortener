// Application Requirements and variables.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// The 'path' created to join the available views to render.
const path = require('path');
// Allows for multiple template engines.
// var engines = require('consolidate');
// Configuration Variables.
const port = process.env.PORT || 3000;
// Assign all routes to the routes folder w/ API prefix.
app.use('/api/v1', require('../public/api.js')(express));
// Set for use of 'Pug(new)/Jade(old) but same' Template Engine.
// app.engine('view engines', 'pug');
// This 'sets' and 'joins' the view 'path' to all 'pug' files.
// app.set('views', path.join(__dirname, 'views'));
// Set for use of 'ejs' Template Engine.
app.set('view engine', 'ejs');
// Use the router function.
// app.use(router);
// This makes use of the apps "bodyParser" module along w/ JSON.
app.use(bodyParser.json());
// This makes use of the apps "bodyParser" module along w/ UrlEncodod set to true. Shortened Url:
app.use(bodyParser.urlencoded({extended: false}));
// Use the 'join' from express static 'path'
app.use(express.static(path.join(__dirname, 'public')));
// Application Listening to the port at 3000.
const server = app.listen(port, function() {
  // Log a string output to let the developer know the server is currently active and working.
  console.log('Server is successfully active on port', port);
});
const views = require('../routes/views.js');
// This makes use of both string and object concatenation to insert the URL string into "urlshortener" HTML file.
app.use(express.static('public'));
app.get('/urlshortener.html', function (req, res){
    res.sendFile(__dirname + "/" + "urlshortener.html");
});
// Route to the 'URLShortener' page view.
app.get('/', function (req, res){
    res.render('urlshortener');
});
// Export the "server" variable to be used by "__api.js" for testing purposes w/ Mocha.
module.exports = server;
// Export "app" variable for access.
module.exports = app;
// Export "express" variable for access.
module.exports = express;
// Export "bodyParser" variable for access.
module.exports = bodyParser;