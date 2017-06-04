
// Create "hasha" variable for making use of the HASHA module. Hasha is used to convert strings to a hash for security
// purposes.
const hasha = require('hasha');
// Create a "charObject" variable to hold the module to shorten the URL.
const charObject = {};
// Export the JSON object module that hold the necessary JS code to shorten the URL.
module.exports = {
    // The "shrink" data object allows for an anonymous function w/ an "address" parameter to hash and shorten the URL.
    shrink: function (address) {
        // Let the "hash" variable invoke the "hasha" variable to tell what conversion standard to use.
        let hash = hasha(address, {encoding: "base64", algorithm: "mds"});
        // Let the "char" variable invoke the "hash" variable to use the slice method to shorten the URL.
        let char = hash.slice(8, 4);
        // Tell "char" variable to replace noted characters in the URL to aid in the shortening of the URL.
        char = char.replace('/', '-');
        // Tell "char" variable to replace noted characters in the URL to aid in the shortening of the URL.
        char = char.replace('+', '-');
        // Couple the "charObject" Array w/ the "char" variable inside the array.
        charObject[char] = address;
        // Return the variable "char".
        return char;
    },
    // The "stretch" data object allows for an anonymous function w/ an "shorturl" parameter to hash and shorten the
    // URL.
    stretch: function (shorturl) {
        // Returns the "charObject" Array w/ the "shorturl" variable inside the array.
        return charObject[shorturl];
    }
};