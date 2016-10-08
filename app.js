var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var users = require('./controllers/UserController');
var routes = require('./routes/index');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var connect = require('connect');
var handlebars = require('handlebars');
var http = require('http');


var dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/alzjukebox'
mongoose.connect(dbUrl, function(err, res){
  if (err){
    console.log('DB CONNECTION FAIL: '+err)
  }
  else {
    console.log('DB CONNECTION SUCCESS: '+dbUrl)
  }
})

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Consuming route parameters
app.get('/users/:username', (req, res) => {
  var msg = 'The username is: ' + req.params.username;
  if (req.query.test != null) {
    msg += ' -- A test query received!'
  }
  res.send(msg);
});

app.get('/users/:fName lName', (req, res) => {
  res.send('The username is: ' + "   " +  req.params.fName + "   " + req.params.lName);
});


app.get('/', (req, res) => {
  res.send('alzjukebox homepage');
});

// GET method route
app.get('/users', (req, res) => {
  // res.send('users homepage');
  res.render('users');
});


// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.listen(8000);


app.set('view engine', 'hjs');   
app.use('/', routes);
app.use('/api', api);
app.use('/users', users);

module.exports = app;




// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('suh !');
// });

// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });