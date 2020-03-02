let board;
let boardView;
// There are 8 Elements in the array
/*
  the board will never change, so the winning outcomes for index positions are
  0,1,2
  3,4,5
  6,7,8
  //vertical
  0,3,6
  1,4,7,
  2,5,8
  //diagonal
  0,4,8
  2,4,6
*/
// @parameter b = board[]
let reasonCodes = [
  { winningPositions: [0, 1, 2], text: "Horizontal First Row" },
  { winningPositions: [3, 4, 5], text: "Horizontal Second Row" },
  { winningPositions: [6, 7, 8], text: "Horizontal Third Row" },
  { winningPositions: [0, 3, 6], text: "Vertical First Row" },
  { winningPositions: [1, 4, 7], text: "Vertical Second Row" },
  { winningPositions: [2, 5, 8], text: "Vertical Third Row" },
  { winningPositions: [0, 4, 8], text: "Diagonal Backslash" },
  { winningPositions: [2, 4, 6], text: "Diagonal Forward Slash" },
  { winningPositions: null, cat: true, error: false, text: "CATS GAME" },
  {
    winningPositions: null,
    text: "Continue Playing, not a game over yet"
  }
];
let player = "X";
function checkForWinner(b) {
  if (b[0] == "X" && b[1] == "X" && b[2] == "X") {
    return { winner: "X", reasonCode: 0 };
  } else if (b[3] == "X" && b[4] == "X" && b[5] == "X") {
    return { winner: "X", reasonCode: 1 };
  } else if (b[6] == "X" && b[7] == "X" && b[8] == "X") {
    return { winner: "X", reasonCode: 2 };
  } else if (b[0] === "X" && b[3] === "X" && b[6] === "X") {
    return { winner: "X", reasonCode: 3 };
  } else if (b[1] === "X" && b[4] === "X" && b[7] === "X") {
    return { winner: "X", reasonCode: 4 };
  } else if (b[2] === "X" && b[5] === "X" && b[8] === "X") {
    return { winner: "X", reasonCode: 5 };
  } else if (b[0] === "X" && b[4] === "X" && b[8] === "X") {
    return { winner: "X", reasonCode: 6 };
  } else if (b[2] === "X" && b[4] === "X" && b[6] === "X") {
    return { winner: "X", reasonCode: 7 };
  } else if (b[0] == "O" && b[1] == "O" && b[2] == "O") {
    return { winner: "O", reasonCode: 0 };
  } else if (b[3] == "O" && b[4] == "O" && b[5] == "O") {
    return { winner: "O", reasonCode: 1 };
  } else if (b[6] == "O" && b[7] == "O" && b[8] == "O") {
    return { winner: "O", reasonCode: 2 };
  } else if (b[0] === "O" && b[3] === "O" && b[6] === "O") {
    return { winner: "O", reasonCode: 3 };
  } else if (b[1] === "O" && b[4] === "O" && b[7] === "O") {
    return { winner: "O", reasonCode: 4 };
  } else if (b[2] === "O" && b[5] === "O" && b[8] === "O") {
    return { winner: "O", reasonCode: 5 };
  } else if (b[0] === "O" && b[4] === "O" && b[8] === "O") {
    return { winner: "O", reasonCode: 6 };
  } else if (b[2] === "O" && b[4] === "O" && b[6] === "O") {
    return { winner: "O", reasonCode: 7 };
  } else if (!b.includes(null) && b.length === 9) {
    return { winner: null, reasonCode: 8, cat: true };
  } else {
    return { winner: null, error: null, reasonCode: 9 };
  }
}

function play(tableIndex) {
  // only react if they havent played yet
  let tile = document.getElementById(tableIndex);
  if (board[tableIndex] === null) {
    board[tableIndex] = player;
    let div = document.createElement("div");
    if (player === "X") {
      div.classList.add("cross");
      player = "O";
    } else {
      div.classList.add("circle");
      player = "X";
    }
    tile.appendChild(div);
  }
  document.getElementById("player").innerText = player;

  //check for winner
  let result = checkForWinner(board);
  let reason = reasonCodes[result.reasonCode];
  if (result.winner) {
    alert(`${result.winner} wins at ${reason.text}`);
  } else if (result.cat) {
    alert(reason.text);
  }
  if (result.error || reason.error) {
    console.error(reason.error);
  }
  if (result.winner || result.cat || result.error || reason.error) {
    resetGame();
  }
}

function resetGame(newPlayer = "X") {
  board = [null, null, null, null, null, null, null, null, null];
  boardView = document.getElementById("boardView");
  if (!newPlayer instanceof Event) {
    player = newPlayer;
  }
  for (let i = 0; i < board.length; i++) {
    document.getElementById(i).innerText = null;
  }
}
document.addEventListener("DOMContentLoaded", resetGame);
