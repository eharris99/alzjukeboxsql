var express = require('express');
var router = express.Router();
var User = require('../models/User')
var passport = require('passport');

router.createUser = function(req,res){
 	User.createUser;
 }

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
		});
	

module.exports = router;

	// Validation
	// req.checkBody('firstName', 'First Name is required').notEmpty();
	// req.checkBody('lastName', 'Last Name is required').notEmpty();
	// req.checkBody('email', 'Email is required').notEmpty();
	// req.checkBody('email', 'Email is not valid').isEmail(); 
	// req.checkBody('password', 'Password is required').notEmpty(); 
	

	// var errors = req.validationErrors();
	// if(errors){
	// 	res.render('users',{
	// 		errors: errors
	// 	});
	// }else{
// 		 var newUser = new User({
// 		 	firstName: firstName,
// 		 	lastName: lastName,
// 		 	email: email, 
// 		 	password: password
// 		 });

// 		 User.find({'email':email},function(err, emailExist){
// 	 	if(!emailExist.length){	 		 

// 			User.createUser(newUser, function(err, user){
// 				var firstName = req.body.firstName;
// 		var lastName = req.body.lastName;
// 	var email = req.body.email; 
// 	var password = req.body.password; 
// 			 	if(err){
// 			 		throw err;
// 			 	}else{
// 			 		console.log(user);
// 			 		res.render('login',{status: {title: 'Account Created', msg: 'Login in using the email and password you just created.'}}); 
// 			 	}
// 			});
				 
// 	 	}else{
// 	 		res.render('signup', {status: {msg: 'A User with Email: '+email + ' Already Exsit'}});
// 	 	}
// 	});
// /

// // router.post('/:resource', function(req, res, next) {
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
