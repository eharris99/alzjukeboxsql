var express = require('express');
var router = express.Router(); 

router.get('/', function(req, res){
	res.render('index');
});

module.exports = router;
// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const router = express.Router();
// const basename = path.basename(module.filename);

// fs
//   .readdirSync(__dirname)
//   .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   // .forEach(file => {
//   //   const fileName = file.substr(0, file.length - 3);
//   //   router.use(`/${fileName}`, require(`./${fileName}`).registerRouter());
//   // });

// router.get('/', (req, res) => {
//   res.render('./views/index.handlebars');
// });

// module.exports = router;
