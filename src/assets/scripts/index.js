console.log('what a beautiful world');
console.log('what the next point?');

const headerListItems = document.querySelectorAll('li');
console.log(headerListItems);
headerListItems.forEach((el) => (el.style.transition = '1s'));

function colorizeListItems(elements, color) {
  elements.forEach((element) => {
    setTimeout(function () {
      element.style.color = color;
    }, 1000);
  });
}

// setTimeout(colorizeListItems(headerListItems, 'red'), 3000);
// setTimeout(colorizeListItems(headerListItems, 'white'), 5000);
// setTimeout(colorizeListItems(headerListItems, 'yellow'), 7000);

function colorize() {
  setTimeout(function () {
    headerListItems.forEach((el) => {
      el.style.color = 'red';
    });
  }, 3000);
  setTimeout(function () {
    headerListItems.forEach((el) => {
      el.style.color = 'white';
    });
  }, 5000);
  setTimeout(function () {
    headerListItems.forEach((el) => {
      el.style.color = 'yellow';
    });
  }, 7000);
  setTimeout(function () {
    headerListItems.forEach((el) => {
      el.style.color = 'white';
    });
    headerListItems.forEach((el) => (el.style.transition = '0s'));
  }, 9000);
}

// const openMenuBtn = document.querySelector('.open_menu');
const openMenuBtn = document.querySelector('.btn');
const img1 = document.querySelector('.img_1');
const img2 = document.querySelector('.img_2');
openMenuBtn.addEventListener('click', function (e) {
  img1.classList.toggle('disaktive');
  img2.classList.toggle('aktive');
  if (img2.classList.value == 'img_2 aktive') {
    e.target.innerText = 'Close Menu';
    // colorize();
  } else e.target.innerText = 'Open Menu';
});

// active nav link after click

headerListItems.forEach((el, i, elements) => {
  el.addEventListener('click', function (e) {
    const btn = e.target.parentElement;
    elements.forEach((el) => el.classList.remove('header__nav_menu-active'));
    btn.classList.add('header__nav_menu-active');
    // console.log(btn);
  });
});

// function activeNavMenuToggle() {}
const formCodepen = document.querySelector('.form__container');
const galleryCodepen = document.querySelector('.gallery');
formCodepen.style.transition = '.5s';
galleryCodepen.style.transition = '.5s';
const codepenBtn = document.querySelector('.codepen');
codepenBtn.addEventListener('click', function () {
  formCodepen.classList.toggle('codepen-visible');
  galleryCodepen.classList.toggle('codepen-visible');
});
