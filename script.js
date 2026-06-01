let squares = [
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0],
];

function Player() {
  this.move = function (number) {
    let row = prompt("enter a row(0, 1, 2)");
    let column = prompt("enter a column(0, 1, 2)");
    if (row == 0 && column == 0) {
      squares[0][0] = number;
    } else if (row == 0 && column == 1) {
      squares[0][1] = number;
    } else if (row == 0 && column == 2) {
      squares[0][2] = number;
    } else if (row == 1 && column == 0) {
      squares[1][0] = number;
    } else if (row == 1 && column == 1) {
      squares[1][1] = number;
    } else if (row == 1 && column == 2) {
      squares[1][2] = number;
    } else if (row == 2 && column == 0) {
      squares[2][0] = number;
    } else if (row == 2 && column == 1) {
      squares[2][1] = number;
    } else if (row == 2 && column == 2) {
      squares[2][2] = number;
    }
  };
}

function playGame() {
  if (!(squares[0][0] == 1 && squares[0][1] == 1 && squares[0][2] == 1)) {
    player1 = new Player();
    player2 = new Player();
    player1.move(1);
    player2.move(2);
    console.log(squares[0][0], squares[0][1], squares[0][2]);
    console.log(squares[1][0], squares[1][1], squares[1][2]);
    console.log(squares[2][0], squares[2][1], squares[2][2]);
    squares[0][0] == 1;
  } else{
    console.log("player 1 is winner")
  }
}

playGame();
