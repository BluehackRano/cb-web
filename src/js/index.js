import _ from  'lodash';
import '../css/style.css';
import printMe from './print.js';
import testIcon from '../images/test_img.png';
import $ from "jquery";

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');
//
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//   btn.innerHTML = 'Click me and check the console!';
//   element.classList.add('hello');
//
//   btn.onclick = $.load("../html/facebook.html");
//
//   var icon = new Image();
//   icon.src = testIcon;
//
//   element.appendChild(icon);
//   element.appendChild(btn);
//
//   return element;
// }
//
// document.body.appendChild(component());

// html({
//   greeting: 'Hello World'
// })
var $ = require('jquery');
var test = document.getElementById("test");
console.log('id->' + test.value);
test.onclick = function () {
  console.log('start onclick')
  $.ajax({
    url : 'facebook.html',
    type : 'GET',
    success : function(data) {
      console.log('onclick')
      alert('test');
    }
  });
};
