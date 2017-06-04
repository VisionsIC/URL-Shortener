// This allows the module to export the "app" variable.
module.exports = function (app) {
    module.exports = function (express) {
      const router = express.Router();
      // JSON Request Test.
      router.get('/request', function (req,res) {
        res.json({hello: 'world'});
      });
      // JSON Status Test.
      router.get('/status', function (req,res) {
        res.json({healthy: 'true'});
      });
      // JSON User ID Test.
      router.get('/user/:id', function (req,res) {
        res.json({user: {id: req.params.id}});
      });
    // Create variable "urlshortener" that requires the "" file work with the API.
    const urlshortener = require('../routes/urlshortener.js');
        // BodyParser module added.
        const bodyParser = require('body-parser');
        // This makes use of the apps "bodyParser" module along w/ JSON.
        app.use(bodyParser.json());
        // This makes use of the apps "bodyParser" module along w/ 'urlencoded' to be 'extended' and set to true.
        app.use(bodyParser.urlencoded({extended: true}));
        // This makes use of both string and object concatenation to insert the URL string into "urlshortener" HTML file.
        app.use('/', express.static(__dirname + "/public"));
        // The below line uses the GET method to insert the "shorturl".
        app.get('/:shorturl', (req, res) => {
            // The "shortURL" variable holds the "urlshortener" variable to '' the newly created 'hashed' URL.
            let shortURL = urlshortener.stretch(req.params.shorturl);
            // The below code sends a 'response' to 'redirect' the shortened URL.
            res.redirect(shortURL);
        });
        // This is the applications POST method to output the newly created URL.
        app.post('/api/vl/urlshortener', function (req, res) {
            // Let the "shrinkUrl" variable 'request' the 'body' of the "url" variable.
            let shrinkUrl = req.body.shrinkUrl;
            // Let the "shorturl" variable use the 'urlshortener' to 'shrink' the "shrinkUrl" variable.
            let shorturl = urlshortener.shrink(shrinkUrl);
            // The below line of code 'responds' w/ the 'send' of the "shorturl" variable.
            res.send(shorturl);
        });
        return router;
    };
};