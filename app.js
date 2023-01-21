let computerChoice = "";

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
