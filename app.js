const express = require('express');
const app = express();
const hoganexpress=require('hogan-express');

const users = require('./controllers/users');

app.use('/users', users);


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

// app.get '/', (req,res)=> {
//   res.locals = name: 'Andrew'
//   res.render 'template', partials: {message: 'message'}
//   }

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.listen(8000);

app.set('view engine', 'hjs');   
// app.set 'layout', 'layout'        
// app.set 'partials', foo: 'foo'   
// app.enable 'view cache'
// app.engine 'html', require('hogan-express')

module.exports = app



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