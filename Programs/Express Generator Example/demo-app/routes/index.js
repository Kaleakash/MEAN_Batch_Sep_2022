var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {      // inside this file they use get method 
  res.render('index', { title: 'Akash Kale' });
});

module.exports = router;
