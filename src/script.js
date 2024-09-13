import winning from "./wincases";
const headingEl = document.querySelector(".heading");
const currentPlayerEl = document.querySelector(".current-player");
const boxesEl = document.querySelectorAll(".box");
const resetButton = document.querySelector("button");

const players = ["X", "O"];
let currentPlayer;
let gameGrid;

function randomPlayer() {
  const newPlayer = Math.floor(Math.random() * 2);
  currentPlayer = players[newPlayer];
}

function swapPlayer() {
  const newPlayer = currentPlayer === players[0] ? players[1] : players[0];
  currentPlayer = newPlayer;
}

function startGame() {
  gameGrid = new Array(9).fill("");
  resetButton.classList.remove("active");
  randomPlayer();
  currentPlayerEl.textContent = currentPlayer;
}
startGame();

function checkWinner() {
  winning.forEach((chance) => {
    const [c1, c2, c3] = chance;
    if (
      gameGrid[c1] !== "" &&
      gameGrid[c2] !== "" &&
      gameGrid[c3] !== "" &&
      gameGrid[c1] === gameGrid[c2] &&
      gameGrid[c2] === gameGrid[c3]
    ) {
      boxesEl.forEach((box) => (box.style.pointerEvents = "none"));
      resetButton.classList.add("active");
      boxesEl[c1].classList.add("green");
      boxesEl[c2].classList.add("green");
      boxesEl[c3].classList.add("green");
      headingEl.textContent = `Player ${gameGrid[c1]} Won!`;
      currentPlayer.textContent = `${gameGrid[c1]} Won!`;
    }
    const x = gameGrid.every(ev => {
        return ev !== ""
    })
    if(x && !headingEl.textContent.includes("W")){
        headingEl.textContent = "Draw hua hai";
        resetButton.classList.add("active")
    }
  });
}

function handleClick(index) {
  if (gameGrid[index] === "") {
    boxesEl[index].textContent = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxesEl[index].style.pointerEvents = "none";
    currentPlayerEl.textContent = currentPlayer;
    checkWinner();
    swapPlayer();
  }
}
boxesEl.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

resetButton.addEventListener("click", () => {
  startGame();
  headingEl.textContent = "Noughts & Crosses";
  boxesEl.forEach((box) => {
    box.classList.remove("green");
    box.textContent = "";
    box.style.pointerEvents = "auto";
  });
});
