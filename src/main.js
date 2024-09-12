const currentPlayerEl = document.querySelector(".current-player");
const boxesEl = document.querySelectorAll(".box");

const players = ["O", "X"];
let currentPlayer;
const swapPlayer = () => {
  const newPlayer = currentPlayer === "X" ? players[0] : players[1];
  currentPlayer = newPlayer
};
// swapPlayer();
// const randomPlayer = () => Math.random() > 0.5 ? "X" : "O";
const randomPlayer = () => {
  const newPlayer = Math.floor(Math.random() * 2);
  currentPlayer = players[newPlayer];
};
randomPlayer();
currentPlayerEl.textContent = currentPlayer;

function handleClick(box){
    box.textContent = currentPlayer;
    swapPlayer();
}
boxesEl.forEach((box) => {
    box.addEventListener("click",()=>{
        handleClick(box)
    })
  });


