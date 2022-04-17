// VARIABLES

const circleWinsElem = document.getElementById('circle-wins');
const xWinsElem = document.getElementById('x-wins');
const drawCountElem = document.getElementById('draws');
const boardElem = document.getElementById('board');

const turn = document.getElementById('turn');
const xDisplay = document.getElementById('x-turn');
const circleDisplay = document.getElementById('circle-turn');

// STATE

const state = {
  circleWins: 0,
  xWins: 0,
  drawCount: 0,
  board: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
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

function clear(element) {
  element.innerHTML = '';
}

function nextMove(cell) {
  state.board[cell] = state.currentPlayer;
  state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
  console.log(state);
}

function render(state) {
  circleWinsElem.innerText = `${state.circleWins} wins`;
  xWinsElem.innerText = `${state.xWins} wins`;
  drawCountElem.innerText = `${state.drawCount} draws`;

  clear(boardElem);
  state.board.forEach((_, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.addEventListener('click', () => nextMove(index));
    boardElem.appendChild(cellElement);
  });
}

render(state);

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
