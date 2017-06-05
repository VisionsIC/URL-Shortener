// Require 'api.js' to make needed code accessible.
const api = require('api.js');
// Create an open JS object named 'newStr'.
const newStr = {};
// Module exports 'urlManipulate' w/ 2 properties; shorten & expand.
module.exports.urlManipulate = {
    // The 'shorten' property inside the JS object holds an exportable anonymous function.
    shorten: module.exports.shorten = function(){
        // New variable "shortUrl" which gains access to the 'grabUrl' function from the 'api.js' file.
        let shortUrl = api.grabUrl();
        // New variable "stripUrl" which cuts off the front 5 characters of the string.
        let stripUrl = shortUrl.slice(0,5);
        // Change variable "stripUrl" so that it replaces all the obscure characters w/ dead space.
        stripUrl = stripUrl.replace(/[.:=!/?#+-_]/g,'');
    },
    expand: module.exports.expand = function (){

    }
};

