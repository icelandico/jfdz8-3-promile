var toCollect = document.getElementsByClassName('element');
var body = document.querySelector('body');
var gameDiv = document.getElementById('gameboard');
var score;
var playerPosition = {
    x: 1,
    y: 1
};

var gameBoard = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,2,1,1,1,1,1,1,1,3,0],
  [0,1,0,1,0,1,0,1,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,1,0,1,0,1,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,1,0,1,0,1,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,1,0,1,0,1,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0]
];

var output = '';

function displayBoard() {
  output = '';
  emptyBoard(body);
  createElement();
  for (var i = 0; i < gameBoard.length; i++) {
    output += "<div class='row'>";
    for (var j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 0) {
        output += "<div class='wall'></div>";
      } else if (gameBoard[i][j] === 1) {
        output += "<div class='coin'></div>";
      } else if (gameBoard[i][j] === 2) {
        output += "<div class='pacman'></div>";
      } else if (gameBoard[i][j] === 3) {
        output += "<div class='element'></div>";
      } else if (gameBoard[i][j] === 4) {
          output += "<div class='collected'></div>";
      }
  }
    output += "</div>"
  }
  var gameDiv = document.getElementById('gameboard');
  gameDiv.innerHTML = output;
}

function createElement() {
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'gameboard');
  body.appendChild(newDiv)
}

setInterval(function () {
  displayBoard();
  getScore();
}, 250);

function emptyBoard(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

var moves = {
    ArrowRight: function(playerPosition) {
      playerPosition.x += 1
    },
    ArrowLeft: function(playerPosition) {
        playerPosition.x -= 1
    },
    ArrowUp: function(playerPosition) {
        playerPosition.y -= 1
    },
    ArrowDown: function(playerPosition) {
        playerPosition.y += 1
    }
};

window.addEventListener('keydown', function (event) {
    var newPosition = Object.assign({}, playerPosition);
    pressedKey = event.code;
    moves[pressedKey](newPosition);
    collision(newPosition);
});

function update(pos) {
    clearPacman();
    playerPosition = pos;
    gameBoard[pos.y][pos.x] = 2;
    getScore();
    console.log(score)
}

function collision(playerPosition) {
    if ((inBoard(playerPosition.x) && inBoard(playerPosition.y)) ) {
        if (wallCollision(playerPosition) === false) {
            update(playerPosition);
        }
    }
}

function inBoard(playerPosition) {
    return playerPosition >= 1 && playerPosition <= gameBoard.length - 2
}

function clearPacman() {
    for (var i = 0; i < gameBoard.length; i++) {
        for (var j = 0; j < gameBoard[i].length; j++) {
            if (gameBoard[i][j] === 2) {
                gameBoard[i][j] = 1;
            }
        }
    }
    collectElement(playerPosition)
}

function wallCollision(pos) {
    for (var i = 0; i < gameBoard.length; i++) {
        for (var j = 0; j < gameBoard[i].length; j++) {
            if (gameBoard[pos.y][pos.x] === 0) {
                return true
            }
        }
        return false
    }
}

function collectElement(pos) {
  if (gameBoard[pos.y][pos.x] === 1) {
    gameBoard[pos.y][pos.x] = 4;
   }
}

function getScore() {
  score = 0;
  for (var i = 0; i < gameBoard.length; i++) {
    for (var j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 4) {
        score++
      }
    }
  }
  return score;
}











