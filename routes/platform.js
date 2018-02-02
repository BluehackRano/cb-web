var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/connect', (req, res) => {

  console.log('start create req =>' + JSON.stringify(req.query));
  var jsonData = '';
  jsonData = {
    setId: req.query.setId
  }

  fs.readFile('views/connect_platform', function (err, data) {
    res.render('connect_platform', {jsonData:jsonData});
  })
});


module.exports = router;