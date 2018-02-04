var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/list', (req, res) => {

  // fs.readFile('views/select_brick', function (err, data) {
  //   res.render('select_brick')
  // })
  fs.readFile('views/create_bricks', function (err, data) {
    res.render('create_bricks')
  })
});

router.get('/create', (req, res) => {

  fs.readFile('views/create_brick_api', function (err, data) {
    res.render('create_brick_api')
  })
});

router.get('/edit', (req, res) => {

  var setId = req.query.setId;
  console.log('/router setId=>' + setId);
  fs.readFile('views/edit_bricks', function (err, data) {
    res.render('edit_bricks', {setId:setId});
  })
});

module.exports = router;