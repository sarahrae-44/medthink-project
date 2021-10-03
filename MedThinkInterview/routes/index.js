var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
    title: 'About'
  });
  console.log("The Chair");
});

router.get('/quiz', function(req, res, next) {
  res.render('pages/quiz', {
    title: 'Quiz'
  });
});

module.exports = router;
