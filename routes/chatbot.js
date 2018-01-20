var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
// var APIClient = require('../public/javascripts/APIClient');


router.get('/list', (req, res) => {

  var routerResponse = res;
  var url = 'https://www.chatbrick.io/api/brick/';
  request.get(url, function (err, res, body) {
    console.log('body =>' + body);
    if (err) {
      console.log("err getbrickListAPI");
    } else {
      var result = JSON.parse(body);
      console.log(result.success);
      if (result.success) {
        // fs.readFile('views/my_chatbot_list.html', function (err, data) {
        //   routerResponse.render('my_chatbot_list')
        // })
      } else {
        console.log(result.msg);
      }

      fs.readFile('views/my_chatbot_list.html', function (err, data) {
        routerResponse.render('my_chatbot_list')
      })
    }
  })
});

// var imageHackathon= '';
// var imageDesignerPortFolio = '';
// var imageBricks = '';
// var sampleData = {
//   data: [
//     {
//       image: imageHackathon,
//       name: "해커톤 프로젝트 1",
//       context: "해커톤 내용입니다"
//     },
//     {
//       image: imageDesignerPortFolio,
//       name: "디자인 포토폴리오 1",
//       context: "디자인 포토폴리오 내용입니다."
//     },
//     {
//       image: imageBricks,
//       name: "브릭 프로젝트 1",
//       context: "브릭 프로젝트 내용입니다."
//     }
//   ]
// }
//
// var botlist = $('#botlist');
// var createMyBot = (`<div id="my_bot">` +
// `<img src="` + imageCreate + `"+ id="bot_image" alt="bot image">` +
// `<div id="bot_name">` + "CREATE BOT" + `</div>` +
// `</div>`);
//
// sampleData.data.forEach(function (item) {
//   var myBot = (
//     `<div id="my_bot">` +
//     `<img src="` + item.image + `"+ id="bot_image" alt="bot image">` +
//     `<div id="bot_name">` + item.name + `</div>` +
//     `<div id="bot_context">` + item.context + `</div>` +
//     `</div>`
//   );
//
//   console.log(item);
//   botlist.append(myBot);
// })
// botlist.append(createMyBot);


module.exports = router;