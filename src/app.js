import './style.css';

// VARIABLES

const circleWinsElem = document.getElementById('circle-wins');
const xWinsElem = document.getElementById('x-wins');
const drawCountElem = document.getElementById('draws');
const boardElem = document.getElementById('board');
const refreshButton = document.querySelector('.refresh');
const currentTurnIndicator = document.querySelector('#current-turn-indicator');

// STATE

let state = {
  circleWins: 0,
  xWins: 0,
  drawCount: 0,
  board: ['', '', '', '', '', '', '', '', ''],
  startingPlayer: 'X',
  currentPlayer: 'X',
};

const winningCombinations = [
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
  const winner = winningCombinations.reduce((acc, curr) => {
    // Check if we found the winner already.
    if (acc) return acc;
    // Try to find winner.
    if (
      state.board[curr[0]] === state.board[curr[1]] &&
      state.board[curr[1]] === state.board[curr[2]]
    ) {
      return state.board[curr[0]];
    }
  }, null);

  if (winner) return winner;

  // Find if we have a draw.
  const isDraw = board.findIndex((v) => v === '') === -1;

  if (isDraw) return 'Draw';

  return null;
}

function refreshPage() {
  state.circleWins = 0;
  state.xWins = 0;
  state.drawCount = 0;
  state.board = ['', '', '', '', '', '', '', '', ''];
  state.currentPlayer = 'X';
  state.startingPlayer = 'X';

  localStorage.setItem('gameData', JSON.stringify(state));

  render(state);
}

function changeOrder() {
  state.startingPlayer = state.startingPlayer === 'X' ? 'O' : 'X';
  state.currentPlayer = state.startingPlayer;
}

function swapPlayer() {
  state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
}

function nextMove(index) {
  const hasEmptySlot = state.board.some((item) => item === '');

  if (hasEmptySlot) {
    state.board[index] = state.currentPlayer;
    swapPlayer();
    localStorage.setItem('gameData', JSON.stringify(state));
    render(state);
  }

  if (findWinner(state.board) === 'X') {
    setTimeout(() => {
      state.board = ['', '', '', '', '', '', '', '', ''];
      state.xWins += 1;
      changeOrder();
      localStorage.setItem('gameData', JSON.stringify(state));
      render(state);
    }, 100);
  }

  if (findWinner(state.board) === 'O') {
    setTimeout(() => {
      state.board = ['', '', '', '', '', '', '', '', ''];
      state.circleWins += 1;
      changeOrder();
      localStorage.setItem('gameData', JSON.stringify(state));
      render(state);
    }, 100);
  }

  if (findWinner(state.board) === 'Draw') {
    setTimeout(() => {
      state.board = ['', '', '', '', '', '', '', '', ''];
      state.drawCount += 1;
      changeOrder();
      localStorage.setItem('gameData', JSON.stringify(state));
      render(state);
    }, 100);
  }
}

window.addEventListener('load', () => {
  state =
    localStorage.getItem('gameData') !== null
      ? JSON.parse(localStorage.getItem('gameData'))
      : state;

  render(state);
});

function render(state) {
  circleWinsElem.innerText = `${state.circleWins} wins`;
  xWinsElem.innerText = `${state.xWins} wins`;
  drawCountElem.innerText = `${state.drawCount} draws`;

  clear(boardElem);

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
      cellElement.style.cursor = 'default';

      cellElement.appendChild(renderX);
    }

    if (state.board[index] === 'O') {
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
  // Render current-turn indicator.

  clear(currentTurnIndicator);

  const xTurn = document.createElement('div');
  const oTurn = document.createElement('div');

  if (state.currentPlayer === 'X') {
    xTurn.classList.add('xTurnActive');
    xTurn.innerHTML = '<i class="fa-solid fa-x"></i>';
    oTurn.classList.add('oTurn');
    oTurn.innerHTML = '<i class="fa-solid fa-o"></i>';
  } else {
    xTurn.classList.add('xTurn');
    xTurn.innerHTML = '<i class="fa-solid fa-x"></i>';
    oTurn.classList.add('oTurnActive');
    oTurn.innerHTML = '<i class="fa-solid fa-o"></i>';
  }

  currentTurnIndicator.appendChild(xTurn);
  currentTurnIndicator.appendChild(oTurn);
}

render(state);
