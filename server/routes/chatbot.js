import express from 'express';

var fs = require('fs');
const router = express.Router();
router.get('/list', (req,res) => {
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


export default router;