const currentPlayerEl = document.querySelector(".current-player");
const boxesEl = document.querySelectorAll(".box");
const gridBox = document.querySelector(".grid");
const players = ["O", "X"];
let currentPlayer;
const swapPlayer = () => {
  const newPlayer = currentPlayer === "X" ? players[0] : players[1];
  currentPlayer = newPlayer;
};
// swapPlayer();
// const randomPlayer = () => Math.random() > 0.5 ? "X" : "O";
const randomPlayer = () => {
  const newPlayer = Math.floor(Math.random() * 2);
  currentPlayer = players[newPlayer];
};
randomPlayer();
currentPlayerEl.textContent = currentPlayer;

function handleClick(box) {
  box.textContent = currentPlayer;
  swapPlayer();
}
boxesEl.forEach((box) => {
  box.addEventListener("click", () => {
    handleClick(box);
  });
});

const resetBtnEl = document.querySelector("button");
resetBtnEl.classList.add("active");

// resetBtnEl.addEventListener("click", () => {
//   resetBtnEl.classList.remove("active");
// });

const hexColors = "0123456789abcdef";
let randomColor = "#";
function randomHex() {
  for (let i = 0; i < 6; i++) {
    const randomHexColor = hexColors[Math.floor(Math.random()) * hexColors.length];
    randomColor += randomHexColor;
    console.log(randomColor);
    
  }
  return randomColor;
}

function handleClick() {
  resetBtnEl.style.background = randomHex();
}
resetBtnEl.addEventListener("click", handleClick);

function handleClick() {
  gridBox.style.background = randomHex();
}
resetBtnEl.addEventListener("click", handleClick);
