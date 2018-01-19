'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var router = _express2.default.Router();
router.get('/list', function (req, res) {
  // console.log('/list res =>' + JSON.stringify(res));
  // res.render('my_chatbot_list');

  // fs.readFile('../../public/view/my_chatbot_list.html', function (err, data) {
  //
  //   // res.header(200, {'content-type': 'text/html'});
  //   res.write(data);
  //   res.end();
  // })
  res.send(res);
});

exports.default = router;