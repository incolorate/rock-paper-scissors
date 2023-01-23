let playerButton = document.querySelectorAll(".choice");
let battleButton = document.querySelector(".battle");
// Modal, chose name/rounds
let modal = document.querySelector(".modal-container");
let userName = document.querySelector(".user-name");
let roundsInput = document.querySelector(".rounds");
//
let playerDisplay = document.querySelector(".player-choice");
let computerDisplay = document.querySelector(".computer-choice");
let messages = document.querySelector(".funny-messages");

let playerScoreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");

let ROUNDS = 5;

let currentRound = 0;
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.35) {
    computerChoice = "rock";
    computerDisplay.innerText = "👊";
  } else if (randomNumber > 0.35 && randomNumber < 0.65) {
    computerChoice = "paper";
    computerDisplay.innerText = "✋";
  } else {
    computerChoice = "scissors";
    computerDisplay.innerText = "✂️";
  }
}

playerButton.forEach((button) =>
  button.addEventListener("click", () => {
    if (currentRound < ROUNDS) {
      currentRound++;
      getComputerChoice();
      playerChoice = button.value;
      playerDisplay.innerText = button.innerText;
      playGame(playerChoice, computerChoice);
      
      updateScore()

    }
  })
);

function updateScore() {
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
}

function playGame(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    playerScore++;
    computerScore++;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
  }
}

battleButton.addEventListener("click", (e) => {
  if (userName.value.length > 3 && roundsInput.value > 0) {
    e.preventDefault();
    ROUNDS = roundsInput.value
    modal.style.display = "none";
  }
});


