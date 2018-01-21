'use strict';

var pre_page = document.getElementById('pre_page');
var next_page = document.getElementById('next_page');

pre_page.onmouseover = function () {
  pre_page.style.backgroundColor = '#fb7c7e';
}

pre_page.onmouseout = function () {
  pre_page.style.backgroundColor = '#fb7c7e';
}

$('#next_page').hover(
  function () {
    $(this).css('backgroundColor','#000000');
  },
  function () {
    $(this).css('backgroundColor','#fb7c7e');
  }
)