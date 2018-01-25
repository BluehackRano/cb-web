var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/connect', (req, res) => {

  fs.readFile('views/connect_platform', function (err, data) {
    res.render('connect_platform');
  })
});


module.exports = router;