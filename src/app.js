let appElement = document.getElementById('.app');
let circleWins = document.getElementById('.circle-wins');
let xWins = document.getElementById('.x-wins');
let drawCount = document.getElementById('.draw-count');
const cellElements = document.querySelectorAll('.cell');
let turn = document.getElementById('#turn');
let xTurn = document.getElementById('#x-turn');
let circleeTurn = document.getElementById('#circle-turn');
const restart = document.getElementById('#restart');
const settings = document.getElementById('#settings');
let circleTurn = true;

// STATE

const state = {
  circleWins: '',
  xWins: '',
  drawCount: '',
  turn: '',
  xTurn: '',
  yTurn: '',
};

/* winningCombination() {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];
} */

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleClick, { once: true });
});

const turnx = function addX(e) {
  const cell = e.target;
  cell.innerHTML = '<i class="fa-solid fa-x"></i>';
  cell.style.backgroundColor = 'white';
  cell.style.color = 'blue';
  cell.style.fontSize = '55px';
  cell.style.cursor = 'default';
};

const turno = function addCircle(e) {
  const cell = e.target;
  cell.innerHTML = '<i class="fa-solid fa-o"></i>';
  cell.style.backgroundColor = 'white';
  cell.style.color = 'turquoise';
  cell.style.fontSize = '55px';
  cell.style.cursor = 'default';
};

function swapTurns() {
  circleTurn = !circleTurn;
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? turnx : turno;
  placeMark(cell, currentClass);
  console.log(currentClass);
  swapTurns();
}
/*
function clear(element) {
  element.innerHTML = '';
}

function render(state) {
  clear(appElement);
} */
