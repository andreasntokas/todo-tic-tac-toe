// VARIABLES

const circleWins = document.getElementById('#circle-wins');
const xWins = document.getElementById('#x-wins');
const drawCount = document.getElementById('#draws');
const cellOne = document.getElementById('#0');
const cellTwo = document.getElementById('#1');
const cellThree = document.getElementById('#2');
const cellFour = document.getElementById('#3');
const cellFive = document.getElementById('#4');
const cellSix = document.getElementById('#5');
const cellSeven = document.getElementById('#6');
const cellEight = document.getElementById('#7');
const cellNine = document.getElementById('#8');
const cellElements = document.querySelectorAll('.cell');
const turn = document.getElementById('#turn');
const xDisplay = document.getElementById('#x-turn');
const circleDisplay = document.getElementById('#circle-turn');

const xPlayer = 'X';
const circlePlayer = 'O';

// STATE

const state = {
  circleWins: 0,
  xWins: 0,
  drawCount: 0,
  board: {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  },
};

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function addX(e) {
  const cell = e.target;
  const addxx = document.createElement('h3');
  addxx.classList.add('addxx');
  addxx.innerHTML = '<i class="fa-solid fa-x"></i>';
  cell.style.backgroundColor = 'white';
  cell.style.cursor = 'default';
  cell.appendChild(addxx);
}

function addCircle(e) {
  const cell = e.target;
  const addcirclee = document.createElement('h3');
  addcirclee.classList.add('addcirclee');
  addcirclee.innerHTML = '<i class="fa-solid fa-o"></i>';
  cell.style.backgroundColor = 'white';
  cell.style.cursor = 'default';
  cell.appendChild(addcirclee);
}

cellElements.forEach((cell, index) => {
  cell.addEventListener('click', addX, { once: true });
});

function clear(element) {
  element.innerHTML = '';
}

function render(state) {
  clear(appElement);
}

// X - CIRCLE CREATION
// EACH CELL TO BE CLICKABLE ONE TIME AND REGISTER THE SYMBOL
// SWAP PLAYER EACH TURN
// WINNING COMBINATIONS, IF NOT THEN RESTART GAME
// ROUND WINNER WHEN WIN COMB=> STATE.WINNER++ UNTIL 5 WINS WHERE IT ENDS (AND RESTART)
// RESTART GAME VIA BUTTON OR WHEN 5 WINS

/*

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winningCombination = [
  '0,1,2',
  '3,4,5',
  '6,7,8',
  '0,3,6',
  '1,4,7',
  '2,5,8',
  '0,4,8',
  '2,4,6',
];

const xTurn = function addX(e) {
  state.cellElements = e.target;
  state.cellElements.innerHTML = '<i class="fa-solid fa-x"></i>';
  state.cellElements.style.backgroundColor = 'white';
  state.cellElements.style.color = 'blue';
  state.cellElements.style.fontSize = '55px';
  state.cellElements.style.cursor = 'default';
};

const circleTurn = function addCircle(e) {
  state.cellElements = e.target;
  state.cellElements.innerHTML = '<i class="fa-solid fa-o"></i>';
  state.cellElements.style.backgroundColor = 'white';
  state.cellElements.style.color = 'turquoise';
  state.cellElements.style.fontSize = '55px';
  state.cellElements.style.cursor = 'default';
};

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleClick, { once: true });
});

function swapTurns() {
  circleTurn = !circleTurn;
}

function isDraw() {
  return cellElements.every(cell => {
    return cell.classList.contains(xTurn) ||
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleStarts ? xTurn : circleTurn;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
}

function endGame(draw) {
  if (draw) {
    state.drawCount++;
  } else {
    circleStarts ? state.circleWins++ : state.xWins++;
  }
}

function checkWin(currentClass) {
  return winningCombination.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function clear(element) {
  element.innerHTML = '';
}

function render(state) {
  clear(appElement);
} */
