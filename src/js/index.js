import _ from  'lodash';
import '../css/style.css';
import printMe from './print.js';
import testIcon from '../images/test_img.png';

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

// document.body.appendChild(component());