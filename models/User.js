var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema()

var UserSchema = new mongoose.Schema({
	firstName:{type:String, default:''},
	lastName:{type:String, default:''},
	email:{type:String, default:''},
	password:{type:String, default:''}
})

module.exports = mongoose.model('UserSchema', UserSchema)