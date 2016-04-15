var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST save data. */
router.post('/save', function(req, res, next) {
  // Send HTTP response
  // http://expressjs.com/en/4x/api.html#res.send
});

module.exports = router;
