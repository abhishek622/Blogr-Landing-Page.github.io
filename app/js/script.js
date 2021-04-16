const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const logo = document.querySelector('#img');
const body = document.querySelector('body');
const element = document.querySelector('.mobile');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('active')) {
    //Close Hameburger Menu
    body.classList.remove('noscroll');
    logo.src = 'images/icon-hamburger.svg';
    header.classList.remove('active');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    //open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('active');
    logo.src = 'images/icon-close.svg';
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});

const button1 = document.querySelector('#x1');
const button2 = document.querySelector('#x2');
const button3 = document.querySelector('#x3');

const arrow1 = document.querySelector('.a1');
const arrow2 = document.querySelector('.a2');
const arrow3 = document.querySelector('.a3');

const div1 = document.querySelector('#y1');
const div2 = document.querySelector('#y2');
const div3 = document.querySelector('#y3');

button1.addEventListener('click', function () {
  var div1 = document.querySelector('#y1');
  if (div1.style.display === 'block') {
    arrow1.style.transform = 'rotate(0deg)';
    div1.style.display = 'none';
  } else {
    arrow1.style.transform = 'rotate(180deg)';
    arrow2.style.transform = 'rotate(0deg)';
    arrow3.style.transform = 'rotate(0deg)';

    div1.style.display = 'block';
    div2.style.display = 'none';
    div3.style.display = 'none';
  }
});

button2.addEventListener('click', function () {
  if (div2.style.display === 'block') {
    arrow2.style.transform = 'rotate(0deg)';
    div2.style.display = 'none';
  } else {
    arrow2.style.transform = 'rotate(180deg)';
    arrow1.style.transform = 'rotate(0deg)';
    arrow3.style.transform = 'rotate(0deg)';

    div2.style.display = 'block';
    div1.style.display = 'none';
    div3.style.display = 'none';
  }
});

button3.addEventListener('click', function () {
  if (div3.style.display === 'block') {
    arrow3.style.transform = 'rotate(0deg)';
    div3.style.display = 'none';
  } else {
    arrow3.style.transform = 'rotate(180deg)';
    arrow1.style.transform = 'rotate(0deg)';
    arrow2.style.transform = 'rotate(0deg)';

    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'block';
  }
});
