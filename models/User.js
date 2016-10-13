'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock',
    email: 'jhancock@gmail.com',
    password: '1234'
  });
  
});
  User.sync({force: true}).then(function () {
return User.create({
    firstName: 'Fred',
    lastName: 'Flintstone',
    email: 'fflintstone@gmail.com',
    password: '1234'
  });
    });

User.findAll().then(function(users) {
  console.log(users)
})
  return User;
};