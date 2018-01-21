'use strict';

var pre_page = document.getElementById('pre_page');
var next_page = document.getElementById('next_page');

pre_page.onmouseover = function () {
  pre_page.style.backgroundColor = '#fb7c7e';
  next_page.style.backgroundColor = '#fd6246';
}

pre_page.onmouseout = function () {
  pre_page.style.backgroundColor = '#ff753c';
}

pre_page.onmouseleave = function () {
  pre_page.style.backgroundColor = '#ff753c';
}

next_page.onmouseover = function () {
  pre_page.style.backgroundColor = '#ff753c';
  next_page.style.backgroundColor = '#fb7c7e';
}

next_page.onmouseout = function () {
  next_page.style.backgroundColor = '#fd6246';
}

next_page.onmouseleave = function () {
  next_page.style.backgroundColor = '#fd6246';
}