import './style.css';

// VARIABLES

const projectEleme = document.getElementById('project');
const circleWinsElem = document.getElementById('circle-wins');
const xWinsElem = document.getElementById('x-wins');
const drawCountElem = document.getElementById('draws');
const boardElem = document.getElementById('board');
const appElem = document.querySelector('.app');

const displayCurrentPlayer = document.getElementById('displayCurrentPlayer');
const xDisplay = document.getElementById('x-turn');
const circleDisplay = document.getElementById('circle-turn');
const refreshButton = document.querySelector('.refresh');

// STATE

const state = {
  circleWins: 0,
  xWins: 0,
  drawCount: 0,
  board: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  turnCount: 0,
  winner: '',
  displayCurrentPlayer: '',
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

function roundWinner() {
  // 0-1-2
  if (
    state.board[0] === 'X' &&
    state.board[1] === 'X' &&
    state.board[2] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[0] === 'O' &&
    state.board[1] === 'O' &&
    state.board[2] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  }
  // 3-4-5
  else if (
    state.board[3] === 'X' &&
    state.board[4] === 'X' &&
    state.board[5] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[3] === 'O' &&
    state.board[4] === 'O' &&
    state.board[5] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  }
  // 6-7-8
  else if (
    state.board[6] === 'X' &&
    state.board[7] === 'X' &&
    state.board[8] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[6] === 'O' &&
    state.board[7] === 'O' &&
    state.board[8] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  }
  // 0, 3, 6
  else if (
    state.board[0] === 'X' &&
    state.board[3] === 'X' &&
    state.board[6] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[0] === 'O' &&
    state.board[3] === 'O' &&
    state.board[6] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  }
  // 1-4-7
  else if (
    state.board[1] === 'X' &&
    state.board[4] === 'X' &&
    state.board[7] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[1] === 'O' &&
    state.board[4] === 'O' &&
    state.board[7] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  }
  // 2-5-8
  else if (
    state.board[2] === 'X' &&
    state.board[5] === 'X' &&
    state.board[8] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[2] === 'O' &&
    state.board[5] === 'O' &&
    state.board[8] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  }
  // 0-4-8
  else if (
    state.board[0] === 'X' &&
    state.board[4] === 'X' &&
    state.board[8] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[0] === 'O' &&
    state.board[4] === 'O' &&
    state.board[8] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  }
  // 2-4-6
  else if (
    state.board[2] === 'X' &&
    state.board[4] === 'X' &&
    state.board[6] === 'X'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.xWins += 1;
    render(state);
  } else if (
    state.board[2] === 'O' &&
    state.board[4] === 'O' &&
    state.board[6] === 'O'
  ) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.circleWins += 1;
    render(state);
  } else if (state.turnCount === 9) {
    state.board = ['', '', '', '', '', '', '', '', ''];
    state.currentPlayer = 'X';
    state.turnCount = 0;
    state.drawCount = state.drawCount + 1;
    render(state);
  }

  if (state.xWins === 5) {
    state.winner = 'X';
    const displayWinner = document.createElement('h3');
    displayWinner.classList.add('display-winner-x');
    displayWinner.innerHTML = `${state.winner} is the winner!`;
    projectEleme.appendChild(displayWinner);
    state.xWins = 0;
    state.circleWins = 0;
    state.drawCount = 0;
    render(state);
  }
  if (state.circleWins === 5) {
    state.winner = 'O';
    const displayWinner = document.createElement('h3');
    displayWinner.classList.add('display-winner-o');
    displayWinner.innerHTML = `${state.winner} is the winner!`;
    projectEleme.appendChild(displayWinner);
    state.xWins = 0;
    state.circleWins = 0;
    state.drawCount = 0;
    render(state);
  }
}

function render(state) {
  circleWinsElem.innerText = `${state.circleWins} wins`;
  xWinsElem.innerText = `${state.xWins} wins`;
  drawCountElem.innerText = `${state.drawCount} draws`;

  displayCurrentPlayer.classList.add('displayCurrentPlayer');
  const slider = document.createElement('span');
  slider.classList.add('slider');
  displayCurrentPlayer.appendChild(slider);
  /* const displayX = document.createElement('h3');
  displayX.classList.add('displayX');
  displayX.innerHTML = '<i class="fa-solid fa-x"></i>';
  const displayCircle = document.createElement('h3');
  displayCircle.classList.add('displayCircle');
  displayCircle.innerHTML = '<i class="fa-solid fa-o"></i>';
  displayCurrentPlayer.appendChild(slider);
  slider.appendChild(displayX);
  slider.appendChild(displayCircle); */

  clear(boardElem);
  state.board.forEach((_, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.addEventListener('click', () => nextMove(index));
    boardElem.appendChild(cellElement);

    function nextMove(index) {
      if (state.board[index] === '') {
        state.board[index] = state.currentPlayer;
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        state.turnCount = state.turnCount + 1;
        console.log(state);
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
        roundWinner();
      }

      function refreshPage() {
        state.circleWins = 0;
        state.xWins = 0;
        state.drawCount = 0;
        state.board = ['', '', '', '', '', '', '', '', ''];
        state.currentPlayer = 'X';
        state.turnCount = 0;
        state.winner = '';
        render(state);
      }

      refreshButton.addEventListener('click', () => refreshPage());
    }
  });
}

render(state);
console.log(state.board);

/* if (state.currentPlayer === 'X') {
  state.displayCurrentPlayer = 'X';
} else if (state.currentPlayer === 'O') {
  state.displayCurrentPlayer = 'O';
} */
