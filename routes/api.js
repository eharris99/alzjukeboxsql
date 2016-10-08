var express = require('express');
var router = express.Router();
var User = require('../models/User')
var passport = require('passport');

router.createUser = function(req,res){
 	User.createUser;
 }

 router.showUsers = function(req, res){
 	User.find()
	.then(function(userList){
		res.render('users', {users: userList});
	});
 };

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