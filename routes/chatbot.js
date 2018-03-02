var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
// var APIClient = require('../public/javascripts/APIClient');


router.get('/create', (req, res) => {

  fs.readFile('views/my_chatbot_list.html', function (err, data) {
    res.render('my_chatbot_create')
  })

});

router.get('/list', (req, res) => {
  fs.readFile('views/my_chatbot_list', function (err, data) {
    res.render('my_chatbot_list')
  })
});

router.get('/edit', (req, res) => {
  fs.readFile('views/edit_hackathon', function (err, data) {
    res.render('edit_hackathon')
  })
});

module.exports = router;