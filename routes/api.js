var express = require('express');
var router = express.Router();
var User = require('../models/User')


/* GET users listing. */
router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource
	if (resource == 'user'){
		User.find(req.query, function(err, results){

		if (err){
				res.json({
						confirmation:'fail',
						message:err
					})
					return
				}
				res.json({
					confirmation:'success',
					results:results
				})
				return
		})
	}
});


	router.post('/:resource', function(req, res, next) {
		var resource = req.params.resource
		if (resource == 'user') {
			User.create(req.body, function(err,result){
				if (err){
					res.json({
						confirmation:'fail',
						message:err
					})
					return
				}
					res.json({
						confirmation:'success',
						result:result
					})
			})
		}
	})

module.exports = router;

// router.post('/:resource', function(req, res, next) {
// 	var resource = req.params.resource

// 	var controller = controllers[resource]
// 	if (controller == null){
// 	    res.json({
// 	    	confirmation:'fail',
// 	    	message: 'Invalid Resource'
// 	    })

// 		return
// 	}

// 	controller.post(req.body, function(err, result){
// 		if (err){
// 		    res.json({
// 		    	confirmation:'fail',
// 		    	message: err
// 		    })
// 			return
// 		}

// 		// if (resource == 'profile')
// 			// req.session.user = result._id // install session cookie to remember
		
// 	    res.json({
// 	    	confirmation:'success',
// 	    	result: result
// 	    })

// 		return
// 	})
// })
