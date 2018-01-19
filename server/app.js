import express from 'express';
import posts from './routes/posts';
import chatbot from  './routes/chatbot';

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const app = express();
let port = 3000;

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('/dist', path.join('dist'));
app.set('view engine', 'jade');
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/', express.static(__dirname + '/../public'));
app.use('/', express.static(__dirname + '/../dist'));

var fs = require('fs');
app.get('/hello', (req, res) => {

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


app.use('/posts', posts);
app.use('/chatbot', chatbot);

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});