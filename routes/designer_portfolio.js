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

  fs.readFile('views/create_user_profile', function (err, data) {
    res.render('create_user_profile', {jsonData:jsonData});
  })
});


module.exports = router;