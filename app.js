let playerButton = document.querySelectorAll(".choice");
let battleButton = document.querySelector(".battle")
let modal = document.querySelector(".modal-container")
let userName = document.querySelector(".user-name")
let roundsInput = document.querySelector(".rounds")

let ROUNDS = 5;

let currentRound = 0;
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
    if (currentRound < ROUNDS) {
      currentRound++;
      getComputerChoice();
      playerChoice = button.value;
      playGame(playerChoice, computerChoice);
    }
  })
);

function playGame(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("tie");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("player win");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("computer win");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("computer wins");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("player win");
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("computer win");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.lof("player win");
  }
}


battleButton.addEventListener("click", (e) => {
  if (userName.value.length > 3 && roundsInput.value > 0) {
    e.preventDefault()
    modal.style.display = "none";
  }
})