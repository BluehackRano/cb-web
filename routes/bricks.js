var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/list', (req, res) => {

  fs.readFile('views/select_brick', function (err, data) {
    res.render('select_brick')
  })
});

module.exports = router;