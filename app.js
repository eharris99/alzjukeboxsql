var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var index = require('./controllers/index');
var users = require('./controllers/signup');
var routes = require('./routes/api.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var connect = require('connect');
var exphbs = require('express-handlebars');
var http = require('http');
var Sequelize = require('sequelize');
var bluebird= require('bluebird');
const passport = require('./middlewares/authentication');
var User = require('./models/user.js');
var models = require('./models/');

var sequelize = new Sequelize("postgres://node:ctp2016@localhost:5432/alzjukebox_development");

// sequelize.authenticate().complete(function(err) {
//     if (err) {
//       console.log('Unable to connect to the database:', err);
//     } else {
//       console.log('Connection has been established successfully.');
//     }
// });

var sql = new Sequelize('alzjukebox_development', 'node', 'ctp2016', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

var test = sql.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();

var app = express();

app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayour: 'main',

}));

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

app.use(function(req,res,next){
    //req.conn = conn;
    req.app = app;
    //req.db = db;
    // handle_database(req,res);
    next();
});

// GET method route
// app.get('/users', (req, res) => {
//   // res.send('users homepage');
//   res.render('users');
// });



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
}
  
];

// var showUsers = function(req, res){
//   User.find()
//   .then(function(userList){
//     res.render('users', {users: userList});
//   });
//  };

app.set('views', __dirname + '/');
app.set('.html', require('handlebars'));

app.get('/signup', function(req, res) {
    res.render('./signup.handlebars')
});
app.post('/signup', (req, res) => {
    models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      req.login(user, () =>
        res.redirect('/profile')
      );
    }).catch(() => {
      res.render('signup');
    // });
  });
  });
// });

// var Users=template(users.toJSON());

app.get('/index', function(req, res) {
    models.User.findAll().then((user) => {
      res.render('index', {
        user,
      });
    });
  // },
});



// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.listen(8000);

// Create `ExpressHandlebars` instance with a default layout.
// var hbs = exphbs.create({
//     defaultLayout: 'main',
//     helpers      : helpers,

//     // Uses multiple partials dirs, templates in "shared/templates/" are shared
//     // with the client-side of the app (see below).
//     partialsDir: [
//         'shared/templates/',
//         'views/partials/'
//     ]
// });


app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars'); 
// app.set('views', '${__dirname}/views/');
app.use('/', routes);
app.use('/api', api);

var controllers = (require('./controllers/'));
// app.use('/users', users);
// app.use(app.router);
// routes.initialize(app);
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