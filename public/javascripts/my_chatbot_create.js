'use strict';

import previewIcon from '../../public/images/btn-preview-01-nor.png';

var $  = require('jquery');
var imagePreview = new Image();
imagePreview.src = previewIcon;

var hackathon_choice = $('#hackathon_choice');
var designer_portfolio_choice = $('#designer_portfolio_choice');
var bricks_choice = $('#bricks_choice');

hackathon_choice.click( function () {
  $(this).css('color','#000000');

  designer_portfolio_choice.css('color','#ffffff');
  bricks_choice.css('color','#ffffff');
});

designer_portfolio_choice.click( function () {
  $(this).css('color','#000000');

  hackathon_choice.css('color','#ffffff');
  bricks_choice.css('color','#ffffff');
});

bricks_choice.click( function () {
  $(this).css('color','#000000');

  designer_portfolio_choice.css('color','#ffffff');
  hackathon_choice.css('color','#ffffff');
});