'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

var _chatbot = require('./routes/chatbot');

var _chatbot2 = _interopRequireDefault(_chatbot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use('/', _express2.default.static(__dirname + '/../public'));

app.get('/hello', function (req, res) {
  return res.send('Can you hear me?');
});

app.use('/posts', _posts2.default);
app.use('/chatbot', _chatbot2.default);

var server = app.listen(port, function () {
  console.log('Express listening on port', port);
});