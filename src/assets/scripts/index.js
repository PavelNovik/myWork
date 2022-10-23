console.log('what a beautiful world');
console.log('what the next point?');

const headerListItems = document.querySelectorAll('a');
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
    el.style.color = 'black';
  });
  headerListItems.forEach((el) => (el.style.transition = '0s'));
}, 9000);
