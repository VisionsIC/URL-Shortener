module.exports = function (express) {
  var router = express.Router();
  // JSON Request Test.
  router.get('/request', function (req,res) {
    res.json({Hello: 'World!'});
  });
  // JSON Status Test.
  router.get('/status', function (req,res) {
    res.json({Healthy: 'True'});
  });
  return router;
};
