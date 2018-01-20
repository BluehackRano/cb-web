// import _ from  'lodash';
// import '../public/css/style.css';
// import printMe from './js/print';
// import testIcon from '../public/images/test_img.png';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  element.classList.add('hello');

  btn.onclick = printMe;

  var icon = new Image();
  icon.src = testIcon;

  element.appendChild(icon);
  element.appendChild(btn);

  return element;
}

// var $ = require('jquery');
var hw = document.getElementById('hw');
hw.addEventListener('click', function(){
  alert('Hello world');
})
// console.log($(hw).html());
// var Mustache = require('mustache');
// var htmltest = $('#content').html();

// console.log(htmltest)

// htmltest({test: "Luke"})
// var htmltest2 = $('#greeting2').html();
// Mustache.parse(htmltest);
// var rendered = Mustache.render(htmltest, {test: "Luke"});
// $('#content').html(rendered);

// var Handlebars = require('handlebars');
// var template = Handlebars.compile(htmltest);
// template({test: "Luke"});


// console.log(htmltest);
// var template = Handlebars.compile(htmltest);
// template({greeting: "test"});
// document.body.appendChild(component());