var express = require('express');
var router = express.Router();
var User = require('../models/User.js')

module.exports = {

	get: function(params, isRaw, callback){
		Entry.find(params, function(err, entries){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null){
				// if (isRaw == true){
				// 	callback(null, entries)
				// 	return
				// }

				// var summaries = []
				// for (var i=0; i<entries.length; i++){
				// 	var entry = entries[i]
				// 	summaries.push(place.summary())
				// }

				callback(null, entries)
			}
		})
	},

	getById: function(id, isRaw, callback){
		Entry.findById(id, function(err, entry){
			if (err){
				if (callback != null)
					callback({message:'Entry Not Found'}, null)

				return
			}

			if (callback != null)
				callback(null, Entry)
		})
	},

	post: function(params, callback){

		Entry.create(params, function(err, entry){
			if (err){
				if (callback != null)
					callback(err, null)

				return
			}

			if (callback != null)
				callback(null, entry)
		})
	},

	// put: function(id, params, callback){
	// 	Place.findByIdAndUpdate(id, params, {new:true}, function(err, place){
	// 		if (err){
	// 			if (callback != null)
	// 				callback(err, null)

	// 			return
	// 		}

	// 		if (callback != null)
	// 			callback(null, place.summary())
	// 	})
	// }



}

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
