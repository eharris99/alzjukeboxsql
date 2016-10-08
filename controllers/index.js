var express = require('express');
var router = express.Router(); 
var User = require('../models/User.js')

var users = [
  { firstName : 'Audrey', 
  lastName : 'Hepburn',
  email: 'audrey@gmail.com',
  password: '1234'
},
{ firstName : 'Fred', 
  lastName : 'Flintstone',
  email: '1234@gmail.com',
  password: '1234'
},
  
];

router.get('/', function(req, res) {
  res.json(users);
});

module.exports = router;