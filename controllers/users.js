const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:username', this.show);

    return router;
  },
  index(req, res) {
    models.User.findAll().then((user) => {
      res.render('users', {
        user,
      });
    });
  },
  show(req, res) {
    models.User.findOne({
      where: { username: req.params.username },
    }).then((user) => {
      models.Post.findAll({
        where: { email: user.email },
      }).then((post) => {
        res.render('users/single', {
          user,
          post,
        });
      });
    }).catch(() => {
      res.render('users/single');
    });
  },
};
// const express = require('express');
// const models = require('../models');
// var User = require('../models/user.js')


// User.findAll().then(function(users) {
//   console.log(users)
// })

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
//         res.render('User/user', {
//           user,
//           post,
//         });
//       });
//     }).catch(() => {
//       res.render('User/user');
//     });
//   },
// };