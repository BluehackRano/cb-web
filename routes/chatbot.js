var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
// var APIClient = require('../public/javascripts/APIClient');


router.get('/create', (req, res) => {

  fs.readFile('views/my_chatbot_list.html', function (err, data) {
    res.render('my_chatbot_create')
  })

  var routerResponse = res;
  var url = 'https://www.chatbrick.io/api/brick/';
  // request.get(url, function (err, res, body) {
  //   console.log('body =>' + body);
  //   if (err) {
  //     console.log("err getbrickListAPI");
  //   } else {
  //     var result = JSON.parse(body);
  //     var setList = JSON.stringify(result.data);
  //     console.log(result.success);
  //     // console.log('setData =>' + setData);
  //
  //     if (result.success) {
  //       // fs.readFile('views/my_chatbot_create.html', function (err, data) {
  //       //   routerResponse.render('my_chatbot_create')
  //       // })
  //     } else {
  //       console.log(result.msg);
  //     }
  //
  //     fs.readFile('views/my_chatbot_create.html', function (err, data) {
  //       routerResponse.render('my_chatbot_create');
  //     })
  //   }
  // })
});

router.get('/list', (req, res) => {
  fs.readFile('views/my_chatbot_list', function (err, data) {
    res.render('my_chatbot_list')
  })
});

router.get('/edit', (req, res) => {

  var itemId = req.query.id;
  console.log('/router itemId=>' + itemId);
  fs.readFile('views/my_chatbot_edit', function (err, data) {
    res.render('my_chatbot_edit', {itemId:itemId});
  })
});

module.exports = router;