'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

var _chatbot = require('./routes/chatbot');

var _chatbot2 = _interopRequireDefault(_chatbot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = (0, _express2.default)();
var port = 3000;

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('/dist', path.join('dist'));
app.set('view engine', 'jade');
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/', express.static(__dirname + '/../public'));
app.use('/', _express2.default.static(__dirname + '/../dist'));

var fs = require('fs');
app.get('/hello', function (req, res) {

  // fs.readFile('my_chatbot_list.html', function (err, data) {
  //
  //   // res.header(200, {'content-type': 'text/html'});
  //   // res.write(data);
  //   // res.end();
  //   // res.send('Can you hear me22?' + JSON.stringify(data));
  //   res.render('aiListBoard');
  // })
  // res.send('Can you hear me22?' + res);
  res.render('my_chatbot_list');
});

app.use('/posts', _posts2.default);
app.use('/chatbot', _chatbot2.default);

var server = app.listen(port, function () {
  console.log('Express listening on port', port);
});