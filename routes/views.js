// This allows for Express to work on the page.
const express = require('express');
// The "app" variable extends Express.
const app = express();
// Access to the 'express' function via the "router" variable.
const router = express.Router();
// Route to the 'URLShortener' page view.
router.get('/urlshortener', function (req, res){
    res.render('urlshortener');
});
