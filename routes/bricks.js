var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/list', (req, res) => {

  fs.readFile('views/select_brick', function (err, data) {
    res.render('select_brick')
  })
});

router.get('/create', (req, res) => {

  fs.readFile('views/create_brick_api', function (err, data) {
    res.render('create_brick_api')
  })
});
module.exports = router;