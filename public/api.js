// BodyParser module added.
const bodyParser = require('body-parser');
// This makes use of the apps "bodyParser" module along w/ 'urlencoded' to be 'extended' and set to true.
//const urlBody = bodyParser.urlencoded({extended: true});
// This makes use of the apps "bodyParser" module along w/ JSON.
const bodyJson = bodyParser.json();
module.exports = function (express) {
    // Create variable "shorten" that requires the "urlshortener.js" file work with the API.
    //const shortUrl = require('urlshortener.js');

    // Access to the 'express' function via the "router" variable.
    const router = express.Router();
    // JSON Request Test.
    router.get('/request', function (req, res) {
        res.json({hello: 'world'});
    });
    // JSON Status Test.
    router.get('/status', function (req, res) {
        res.json({healthy: 'true'});
    });
    // JSON User ID Test.
    const  datastore = [];
    router.get('/:regular', function (req,res){
        const regular = req.params.regular;
        datastore.push({regular: regular});
        const resObj = {CapturedUrl: regular};
        res.send(resObj);
    });
    // JSON User ID Test.
    router.post('/:regular', bodyJson, function (req,res){
        console.log(req.body);
        res.json({output: {data: req.body}});
    });
    return router;
};