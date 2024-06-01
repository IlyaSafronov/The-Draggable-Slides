'use strict';
const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

// ! keep track of user's mouse down and up
let isPressedDown = false;
// ! x horizontal space of cursor from inner container
let cursorXSpace;

container.addEventListener('mousedown', (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
});

window.addEventListener('mouseup', () => {
  isPressedDown = false;
})

container.addEventListener('mousemove', (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
});