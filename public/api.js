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
    // Make a empty 'datastore' array.
    const  datastore = [];
    // Create a POST w/ a parameter of 'regular' stored in a variable of the same name in an anonymous function.
    router.post('/:regular', function (req,res){
        // Pass that '' parameter in the 'params' method.
        const regular = req.params.regular;
        // Push the parameter to the 'datastore' array.
        datastore.push({regular: regular});
        // Store the "" variable in another variable called "resObj".
        const resObj = {CapturedUrl: regular};
        // Response by sending the "resObj" variable.
        res.send(resObj);
    });
    // this uses the GET method to find all data JSON objects added to the array at the address 'urldata'.
    router.get('/urldata', function(req,res){
        // SEND all objects added to the 'datastore' array.
        res.send(datastore);
    });
    // Return the "router" variable.
    return router;
};