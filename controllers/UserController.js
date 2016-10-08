var express = require('express');
var router = express.Router();
var User = require('../models/User.js')

// module.exports = {

// 	get: function(params, isRaw, callback){
// 		User.find(params, function(err, users){
// 			if (err){
// 				if (callback != null)
// 					callback(err, null)

// 				return
// 			}

// 			if (callback != null){
				

// 				callback(null, users)
// 			}
// 		})
// 	},

// 	getById: function(id, isRaw, callback){
// 		User.findById(id, function(err, user){
// 			if (err){
// 				if (callback != null)
// 					callback({message:'Entry Not Found'}, null)

// 				return
// 			}

// 			if (callback != null)
// 				callback(null, User)
// 		})
// 	},

// 	post: function(params, callback){

// 		User.create(params, function(err, user){
// 			if (err){
// 				if (callback != null)
// 					callback(err, null)

// 				return
// 			}

// 			if (callback != null)
// 				callback(null, user)
// 		})
// 	},
// }

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Users Controller :: Time: ', Date.now());
  next();
});

// define the home page route
router.get('/users', function(req, res) {
  // res.send('Users home page');
  res.render('./views/users.hjs')
});

router.post('/users/:id', function(req, res) {
  res.send('post page for a user');
});

// define the about route
router.get('/:slug', function(req, res) {
  res.send('This is user: ' + req.params.slug);
});

module.exports = router;
