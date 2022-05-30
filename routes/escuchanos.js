var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('escuchanos'); //view/escuchanos.hbs
});

module.exports = router;