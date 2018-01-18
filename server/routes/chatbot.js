import express from 'express';

const router = express.Router();

router.get('/list', (req,res) => {
  console.log('/list res =>' + res.body);
  res.render('my_chatbot_list');
});


export default router;