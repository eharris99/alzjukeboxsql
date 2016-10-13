const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
    res.render('sign-up');
  },
  submit(req, res) {
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
      res.render('sign-up');
    });
  },
};


// const express = require('express');
// const models = require('../models');
// const router = express.Router();

//  //show list of users
//  router.showUsers = function(req, res){
//  	User.find()
// 	.then(function(userList){
// 		res.render('index', {users: userList});
// 	});
//  };

// module.exports = {
//   registerRouter() {
//     const router = express.Router();

//     router.get('/', this.index);
//     router.get('/:username', this.show);

//     return router;
//   },
//   index(req, res) {
//     models.User.findAll().then((user) => {
//       res.render('users', {
//         user,
//       });
//     });
//   },
//   show(req, res) {
//     models.User.findOne({
//       where: { username: req.params.username },
//     }).then((user) => {
//       models.Post.findAll({
//         where: { email: user.email },
//       }).then((post) => {
//         res.render('./index.handlebars', {
//           user,
//           post,
//         });
//       });
//     }).catch(() => {
//       res.render('./index.handlebars');
//     });
//   },
// };
