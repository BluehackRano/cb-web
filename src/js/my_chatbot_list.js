'use strict';

import testIcon from '../images/test_img.png';
import createIcon from '../images/img-create-bot-nor.png';
import hackathonIcon from '../images/img-hackathon.png';
import designerPortFolioIcon from '../images/img-designer-portfolio-01.png';
import bricksIcon from '../images/img-bricks.png';
var $ = require('jquery');

$(document).ready(function () {
    //get chatbot list in server
    // $.ajax({
    //   url : '/chatbotList',
    //   type : 'GET',
    //   success : function() {
    //     console.log('success called GET /aiDetailBoard');
    //     // location.href = '/aiDetailBoard/';
    //     //if ( result['result'] == true ) {}
    //   }
    // });

    // var imageHackathon = new Image();
    // var imageDesignerPortFolio = new Image();
    // var imageBricks = new Image();
    // var imageCreate = new Image();
    var imageHackathon = "http://localhost:63342/cb-web/dist/a0a6bc8ff0fa45da44772ac9b4b9aa26.png";
    // imageHackathon.src = hackathonIcon;
    var imageDesignerPortFolio = "http://localhost:63342/cb-web/dist/5af6afca3b086d07129c921dd17c3876.png";
    // imageDesignerPortFolio.src = designerPortFolioIcon;
    var imageBricks = "http://localhost:63342/cb-web/dist/cfa506eb39dff0e407b443e7433bfa51.png";
    // imageBricks.src = bricksIcon;
    var imageCreate = "http://localhost:63342/cb-web/dist/8c66fad22ab7d9c24fab1ed9a7c6a175.png";
    // imageCreate.src = createIcon;

    var sampleData = {
        data: [
            {
                image: imageHackathon,
                name: "해커톤 프로젝트 1",
                context: "해커톤 내용입니다"
            },
            {
                image: imageDesignerPortFolio,
                name: "디자인 포토폴리오 1",
                context: "디자인 포토폴리오 내용입니다."
            },
            {
                image: imageBricks,
                name: "브릭 프로젝트 1",
                context: "브릭 프로젝트 내용입니다."
            }
        ]
    }

    var botlist = $('#botlist');
    var createMyBot = (`<div id="my_bot">` +
    `<img src="` + imageCreate + `"+ id="bot_image" alt="bot image">` +
    `<div id="bot_name">` + "CREATE BOT" + `</div>` +
    `</div>`);

    sampleData.data.forEach(function (item) {
        var myBot = (
            `<div id="my_bot">` +
            `<img src="` + item.image + `"+ id="bot_image" alt="bot image">` +
            `<div id="bot_name">` + item.name + `</div>` +
            `<div id="bot_context">` + item.context + `</div>` +
            `</div>`
        );

        console.log(item);
        botlist.append(myBot);
    })
    botlist.append(createMyBot);

});
