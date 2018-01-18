import express from 'express';
import posts from './routes/posts';
import chatbot from  './routes/chatbot';

const app = express();
let port = 3000;

app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => {
  return res.send('Can you hear me?');
});


app.use('/posts', posts);
app.use('/chatbot', chatbot);

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});