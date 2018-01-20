import brick_Icon_01 from '../../public/images/img-brick-01.png';

var image_Brick_Icon_01 = new Image();
image_Brick_Icon_01.src = brick_Icon_01;

var $  = require('jquery');

var item_brick_id = "item_brick_";
var item_brick_choice_id = "item_brick_choice_";
var item_brick_preview_id = "item_brick_preview_";
var brick_name = "xxxx";

var createBrickItem = (
  `<div id=`+ item_brick_id +` class="brick_item">` +
  `<img src="http://localhost:63342/cb-web/dist/824126bd7bcc1478656d0c85f8e11038.png" alt="brick image" class="brick_img"> ` +
  `<div class="brick_name">`+brick_name+`</div> ` +
  `<div class="item_brick_event"> ` +
  `<div id=`+item_brick_choice_id +` class="brick_choice">브릭 선택하기</div> ` +
`<div id=`+ item_brick_preview_id +` class="brick_preview"> ` +
  `<img src="http://localhost:63342/cb-web/dist/36301c74710f6da599bd68485babe274.png" alt="preview_img"> ` +
  `</div> ` +
  `</div>` +
  `</div>`
);

var brick_choice = $('.brick_choice');
var isClickedBrick = false;

brick_choice.click( function () {

  if (isClickedBrick) {
    // $(this).parent().find('.brick_choice').css('background-color','#fd6246');
    $(this).css('background-color','#000000');
    isClickedBrick = false;

  } else {
    // $(this).parent().find('.brick_choice').css('background-color','#000000');
    $(this).css('background-color','#fd6246');
    isClickedBrick = true;
  }

})