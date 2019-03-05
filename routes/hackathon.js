var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/create', (req, res) => {

  console.log('start create req =>' + JSON.stringify(req.query));
  var jsonData = '';
  jsonData = {
    baseInfo_name: req.query.baseInfo_name,
    baseInfo_context: req.query.baseInfo_context
  }

  fs.readFile('views/create_hackathon', function (err, data) {
    res.render('create_hackathon', {jsonData:jsonData});
  })
});

router.get('/edit', (req, res) => {

  var setId = req.query.setId;
  console.log('/router setId=>' + setId);
  fs.readFile('views/edit_hackathon', function (err, data) {
    res.render('edit_hackathon', {setId:setId});
  })
});


module.exports = router;