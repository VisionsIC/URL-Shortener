module.exports = function (express) {
  var router = express.Router();
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
  return router;
};
