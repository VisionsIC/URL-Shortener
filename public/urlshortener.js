// Require 'api.js' to make needed code accessible.
const api = require('api.js');
// Create an open JS object named 'newStr'.
const newStr = {};
// Module exports 'urlManipulate' w/ 2 properties; shorten & expand.
module.exports.urlManipulate = {
    // The 'shorten' property inside the JS object holds an exportable anonymous function.
    shorten: module.exports.urlShortener = function(){
        // Construct an anonymous function in a variable called "randSort" to be used below.
        const randSort = function () {
            // Return the 'Math.random' method to shuffle the leftover string.
            return Math.random()>.5 ? -1 : 1;
        };
        // New variable "shortUrl" which gains access to the 'grabUrl' function from the 'api.js' file.
        let shortUrl = api.grabUrl();
        // New variable "stripUrl" which cuts off the front 5 characters of the string.
        let stripUrl = shortUrl.slice(0,5);
        // Change variable "stripUrl" so that it replaces all the obscure characters w/ dead space.
        stripUrl = stripUrl.replace(/[.:=!/?#+-_]/g,'');
        // Change variable "stripUrl" so that it splits the characters in half.
        stripUrl = stripUrl.split('');
        // Changes the "stripUrl" variable to sort the characters using the 'randSort' function.
        stripUrl.sort(randSort);
        // Changes the "stripUrl" variable to join all the randomly sorted characters back into the string.
        stripUrl = shortUrl.join('');
        // Changes the "stripUrl" variable to cut off the string after the sixth character.
        stripUrl = stripUrl.trunc(5);
        // Creates the 'newStr' array to accept in the new 'stripUrl' variable.
        newStr[stripUrl] = stripUrl;
        //
        let addUrl = 'http://' + newStr;
        // Test it out for progress.
        console.log(addUrl);
        // Returns 'stripUrl' function.
        return addUrl;
    },
    // The 'expand' property inside the JS object holds an exportable anonymous function.
    expand: module.exports.expand = function (){
    }
};
