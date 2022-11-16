console.log('what a beautiful world');
console.log('what the next point?');

const headerListItems = document.querySelectorAll('a');
console.log(headerListItems);
// headerListItems.forEach((el) => (el.style.transition = '1s'));

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

// setTimeout(function () {
//   headerListItems.forEach((el) => {
//     el.style.color = 'red';
//   });
// }, 3000);
// setTimeout(function () {
//   headerListItems.forEach((el) => {
//     el.style.color = 'white';
//   });
// }, 5000);
// setTimeout(function () {
//   headerListItems.forEach((el) => {
//     el.style.color = 'yellow';
//   });
// }, 7000);
// setTimeout(function () {
//   headerListItems.forEach((el) => {
//     el.style.color = 'black';
//   });
//   headerListItems.forEach((el) => (el.style.transition = '0s'));
// }, 9000);

// const openMenuBtn = document.querySelector('.open_menu');
const openMenuBtn = document.querySelector('.btn');
const img1 = document.querySelector('.img_1');
const img2 = document.querySelector('.img_2');
openMenuBtn.addEventListener('click', function (e) {
  img1.classList.toggle('disaktive');
  img2.classList.toggle('aktive');
  if (img2.classList.value == 'img_2 aktive') {
    e.target.innerText = 'Close Menu';
  } else e.target.innerText = 'Open Menu';
});
