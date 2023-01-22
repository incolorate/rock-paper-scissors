let playerButton = document.querySelectorAll(".choice");

let ROUNDS = 5;

let computerChoice;
let playerChoice;

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.35) {
    computerChoice = "rock";
  } else if (randomNumber > 0.35 && randomNumber < 0.65) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

playerButton.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.value;
  })
);

// function playGame (playerChoice, computerChoice) {
//   for (i = 0; i < ROUNDS; i++) {

//   }
// }