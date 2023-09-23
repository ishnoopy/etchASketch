
const NUMBER_OF_SQUARES = 32;
const gameContainer = document.getElementById('game-container');
const colorContainer = document.getElementById('color-container');
let paddingSize = 10;


let isMouseDown = false;
let activeColor = 'rgb(255, 255, 255)';

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

function reset() {
  document.querySelectorAll('#game-container div').forEach((e) => {
    e.style.backgroundColor = 'rgb(255, 255, 255)';
  })
}

function erase() {
  activeColor = 'rgb(255, 255, 255)';
}

// DOCU: This creates the grid
for (let row = 0; row < NUMBER_OF_SQUARES; row++) {
  let rowElement = document.createElement('div');
  rowElement.setAttribute('style', "display: flex; flex-direction: row;");

  for (let column = 0; column < NUMBER_OF_SQUARES; column++) {
    let columnElement = document.createElement('div');
    columnElement.setAttribute('style', `padding: ${paddingSize}px; border: 1px solid black; border-style: dotted; background-color: rgb(255, 255, 255);`);
    columnElement.setAttribute('id', `${row}-${column}`);
    rowElement.appendChild(columnElement);
  }

  gameContainer.appendChild(rowElement);
}

// DOCU: This creates the color palette
for (let i = 0; i < 16; i++) {
  let colorElement = document.createElement('div');
  colorElement.setAttribute('style', `background-color: ${getRandomColor()}; padding: 10px; border: 1px solid black;`);
  colorElement.setAttribute('id', `color-${i}`);
  colorElement.addEventListener('click', (e) => {
    activeColor = e.target.style.backgroundColor;
  })
  colorContainer.appendChild(colorElement);
}


gameContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
})

gameContainer.addEventListener('mouseup', (e) => {
  isMouseDown = false;
})

gameContainer.addEventListener('mouseover', (e) => {
  if (isMouseDown) {
    e.target.style.backgroundColor = activeColor;
  }
})




