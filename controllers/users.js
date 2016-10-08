var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Users Controller :: Time: ', Date.now());
  next();
});


// define the home page route
router.get('/', function(req, res) {
  res.send('Users home page');
});

router.post('/users/:id', function(req, res) {
  res.send('post page for a user');
});

// define the about route
router.get('/:slug', function(req, res) {
  res.send('This is user: ' + req.params.slug);
});

module.exports = router;
