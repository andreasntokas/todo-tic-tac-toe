import './style.css';

// VARIABLES

const circleWinsElem = document.getElementById('circle-wins');
const xWinsElem = document.getElementById('x-wins');
const drawCountElem = document.getElementById('draws');
const boardElem = document.getElementById('board');
const refreshButton = document.querySelector('.refresh');

// STATE

const state = {
  circleWins: 0,
  xWins: 0,
  drawCount: 0,
  board: ['', '', '', '', '', '', '', '', ''],
  startingPlayer: 'X',
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

function clear(element) {
  element.innerHTML = '';
}

function findWinner(board) {
  // 0-1-2
  if (
    state.board[0] === 'X' &&
    state.board[1] === 'X' &&
    state.board[2] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[0] === 'O' &&
    state.board[1] === 'O' &&
    state.board[2] === 'O'
  ) {
    return 'O';
  }
  // 3-4-5
  if (
    state.board[3] === 'X' &&
    state.board[4] === 'X' &&
    state.board[5] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[3] === 'O' &&
    state.board[4] === 'O' &&
    state.board[5] === 'O'
  ) {
    return 'O';
  }
  // 6-7-8
  if (
    state.board[6] === 'X' &&
    state.board[7] === 'X' &&
    state.board[8] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[6] === 'O' &&
    state.board[7] === 'O' &&
    state.board[8] === 'O'
  ) {
    return 'O';
  }
  // 0, 3, 6
  if (
    state.board[0] === 'X' &&
    state.board[3] === 'X' &&
    state.board[6] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[0] === 'O' &&
    state.board[3] === 'O' &&
    state.board[6] === 'O'
  ) {
    return 'O';
  }
  // 1-4-7
  if (
    state.board[1] === 'X' &&
    state.board[4] === 'X' &&
    state.board[7] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[1] === 'O' &&
    state.board[4] === 'O' &&
    state.board[7] === 'O'
  ) {
    return 'O';
  }
  // 2-5-8
  if (
    state.board[2] === 'X' &&
    state.board[5] === 'X' &&
    state.board[8] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[2] === 'O' &&
    state.board[5] === 'O' &&
    state.board[8] === 'O'
  ) {
    return 'O';
  }
  // 0-4-8
  if (
    state.board[0] === 'X' &&
    state.board[4] === 'X' &&
    state.board[8] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[0] === 'O' &&
    state.board[4] === 'O' &&
    state.board[8] === 'O'
  ) {
    return 'O';
  }
  // 2-4-6
  if (
    state.board[2] === 'X' &&
    state.board[4] === 'X' &&
    state.board[6] === 'X'
  ) {
    return 'X';
  }
  if (
    state.board[2] === 'O' &&
    state.board[4] === 'O' &&
    state.board[6] === 'O'
  ) {
    return 'O';
  }
  if (
    state.board[0] !== '' &&
    state.board[1] !== '' &&
    state.board[2] !== '' &&
    state.board[3] !== '' &&
    state.board[4] !== '' &&
    state.board[5] !== '' &&
    state.board[6] !== '' &&
    state.board[7] !== '' &&
    state.board[8] !== ''
  ) {
    return 'Draw';
  }
}

function refreshPage() {
  state.circleWins = 0;
  state.xWins = 0;
  state.drawCount = 0;
  state.board = ['', '', '', '', '', '', '', '', ''];
  state.currentPlayer = 'X';
  state.startingPlayer = 'X';
  render(state);
}

function changeOrder() {
  state.startingPlayer = state.startingPlayer === 'X' ? 'O' : 'X';
  state.currentPlayer = state.startingPlayer;
  render(state);
  console.log(state.startingPlayer);
}

function swapPlayer() {
  if (state.startingPlayer === 'X') {
    state.currentPlayer =
      state.currentPlayer === state.startingPlayer ? 'O' : 'X';
    render(state);
  }
  if (state.startingPlayer === 'O') {
    state.currentPlayer =
      state.currentPlayer === state.startingPlayer ? 'X' : 'O';
    render(state);
  }
}

function nextMove(index) {
  const hasEmptySlot = state.board.some((item) => item === '');

  if (hasEmptySlot === true) {
    state.board[index] = state.currentPlayer;
    swapPlayer();
    render(state);
  }
  if (findWinner(state.board) === 'X') {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.xWins += 1;
    changeOrder();
    render(state);
  }
  if (findWinner(state.board) === 'O') {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.circleWins += 1;
    changeOrder();
    render(state);
  }
  if (findWinner(state.board) === 'Draw') {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.drawCount += 1;
    changeOrder();
    render(state);
  }
}

function render(state) {
  circleWinsElem.innerText = `${state.circleWins} wins`;
  xWinsElem.innerText = `${state.xWins} wins`;
  drawCountElem.innerText = `${state.drawCount} draws`;

  clear(boardElem);
  console.log(state);
  state.board.forEach((_, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    if (state.board[index] === '') {
      cellElement.addEventListener('click', () => nextMove(index));
    }
    if (state.board[index] === 'X') {
      const renderX = document.createElement('h3');
      renderX.classList.add('renderX');
      renderX.innerHTML = '<i class="fa-solid fa-x"></i>';
      cellElement.style.backgroundColor = 'white';
      cellElement.style.displayFl = '';
      cellElement.style.cursor = 'default';
      cellElement.appendChild(renderX);
    } else if (state.board[index] === 'O') {
      const renderO = document.createElement('h3');
      renderO.classList.add('renderO');
      renderO.innerHTML = '<i class="fa-solid fa-o"></i>';
      cellElement.style.backgroundColor = 'white';
      cellElement.style.cursor = 'default';
      cellElement.appendChild(renderO);
    }

    boardElem.appendChild(cellElement);

    refreshButton.addEventListener('click', () => refreshPage());
  });
}

render(state);
