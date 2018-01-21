var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/create', (req, res) => {

  fs.readFile('views/create_user_profile', function (err, data) {
    res.render('create_user_profile')
  })
});


module.exports = router;