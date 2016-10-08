// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// var routes = require('./routes/index');
// var api = require('./routes/api');

// var dbUrl = 'mongodb://localhost/alzjukebox'
// mongoose.connect(dbUrl, function(err, res){
//   if (err){
//     console.log('DB CONNECTION FAIL: '+err)
//   }
//   else {
//     console.log('DB CONNECTION SUCCESS: '+dbUrl)

//   }

// })

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hjs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/api', api);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
// app.listen(8000);

// module.exports = app;


var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var users = require('./controllers/UserController');
var routes = require('./routes/index');
var api = require('./routes/api');


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
app.use('/', routes);
app.use('/api', api);
app.use('/users', users);
// app.set 'layout', 'layout'        
// app.set 'partials', foo: 'foo'   
// app.enable 'view cache'
// app.engine 'html', require('hogan-express')

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