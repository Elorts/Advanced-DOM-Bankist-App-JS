'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////
// page navigation
//
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. add eventn listener to common parent
// 2. determine what element originate the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//console.log('**Selecting elements, creating and deleting el***<196>*****');
/*
// selecting
console.log(document.documentElement); // entire doc
console.log(document.head);
console.log(document.body); // entire doc

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting
// check .insertAdjecentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cooooockies!';
message.innerHTML =
  'innerHtml cooooockies <button class="btn btn--close-cookie">Cockies Btn!</button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// delete
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
*/
/*
console.log('**Ssstyles, attr, class***<197>*****');

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color); // shows message propertires

console.log(
  (message.style.height =
    Number.parseFloat(getComputedStyle(message).height) + 40 + 'px')
);

//setproperty
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
logo.alt = 'Mumumu!';

console.log(logo.alt);
console.log(logo.src);

console.log(logo.className);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'good company');

console.log(logo.src);
console.log(logo.getAttribute('src'));

// classes
logo.classList.toggle('mikas', 'ridikas');
*/
/*
console.log('**Smoth scrolling*******<198>*****');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  //console.log(s1coords);

  //scroll to old way
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   right: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

console.log('**events*******<199>*****');

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 10000);

// old way
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };
*/
/*
console.log('**bubbling and capturing*******<200>*****');
// bubbling theory
*/
/*
console.log('**event propagation in practice*******<201>*****');

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
  // e.stopPropagation(); // stops event traveling up not a good practice in general
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
*/
