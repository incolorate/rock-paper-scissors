let playerButton = document.querySelectorAll(".choice");
let battleButton = document.querySelector(".battle");
// Modal, chose name/rounds
let modal = document.querySelector(".modal-container");
let userName = document.querySelector(".user-name");
let roundsInput = document.querySelector(".rounds");
//
let playerDisplay = document.querySelector(".player-choice");
let computerDisplay = document.querySelector(".computer-choice");

let playerScoreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");

let ROUNDS = 5;

let playerName;
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
      updateScore();
      if (currentRound == ROUNDS) {
        endGame();
      }
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
    ROUNDS = roundsInput.value;
    playerName = userName.value;
    modal.style.display = "none";
  }
});

//
let textIfPlayerWin =
  "emerges victorious, standing tall and proud in the face of his fierce opponent. His trusty weapon, honed and sharpened to perfection, has proven to be mightier than the competition. The crowd erupts in cheers and applause as the warrior raises his weapon in triumph. The battle was intense, but the warrior's skill and determination has led him to victory. He basks in the glory of his hard-earned triumph, a true champion among warriors.";
let textIfComputerWin =
  "The monster roars in triumph as it crushes its opponent. Its immense power and strength proved to be too much for the warrior to handle. The crowd watches in awe and fear as the monster stands victorious, its fierce eyes scanning the arena for its next challenge. The warrior, though defeated, can only look on in respect for the monster's undeniable power. The monster reigns supreme, a true champion among monsters.";
let textIfTie =
  "The battle is intense, both the monster and the warrior giving it their all. But in the end, neither can claim victory as it ends in a tie. The monster's raw power is matched by the warrior's skill and strategy. The crowd watches in amazement as both fighters stand tall, panting and exhausted from the grueling match. It's a draw, and both the monster and the warrior can only look at each other in respect, knowing they have both fought a great battle";
let endText = document.querySelector(".end-game");
let overModal = document.querySelector(".over-modal-container");

function endGame() {
  overModal.style.display = "flex";
  if (playerScore > computerScore) {
    endText.innerText = `${playerName} ${textIfPlayerWin}`;
  } else if (playerScore < computerScore) {
    endText.innerText = textIfComputerWin;
  } else if (playerScore === computerScore) {
    endText.innerText = textIfTie;
  }
}

