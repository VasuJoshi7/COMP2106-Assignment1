var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/demo1', function (req, res, next) {
  res.render('demo1');
})

module.exports = router;
