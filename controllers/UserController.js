var express = require('express');
var router = express.Router();
var models = require('../models/');
var User = require('../models/user.js');

models.User.findAll().then(function(users) {
  console.log(users)
})

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Users Controller :: Time: ', Date.now());
  next();
});

// define the home page route
router.get('/users', function(req, res) {
  // res.send('Users home page');
  // res.render('./views/users.hjs')
  res.render('./views/users.handlebars')
});

router.get('/index', function(req, res, next){
	models.User.findAll
	.then(function(userList){
		res.render('index', {users: userList});
	});
});

router.post('/users/:id', function(req, res) {
  res.send('post page for a user');
});

// define the about route
// router.get('/:slug', function(req, res) {
//   res.send('This is user: ' + req.params.slug);
// });

module.exports = router;
