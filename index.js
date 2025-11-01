// ROCK - PAPER - SCISSORS
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerChoiceDisplay = document.getElementById("playerChoice");
let playerScore = 0;
let computerScore = 0;

// We have to pick a choice for the computer between rock, paper or scissors.
// So we generate a random number between 0 and 2. 0 => rock, 1 => paper, 2 => scissors,
// this is the computerChoice. Then we compare the playerChoice with the computerChoice.
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random()*3)];
  console.log(computerChoice);  // checking
  let result = "";

  if(playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    // We can use a switch. We examine a value against matching cases.
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  // Updating the text on the screen
  playerDisplay.textContent = playerChoice;
  computerDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  // We want the result text to change color according to the result.
  if (result === "YOU WIN!") {
    resultDisplay.classList.add("greenText");
    // Incrementing the player's score and updating the playerScoreDisplay.
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "YOU LOSE!") {
    resultDisplay.classList.add("redText");
    // Incrementing the computer's score and updating the computerScoreDisplay.
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  } else {
    resultDisplay.classList.remove("greenText", "redText");
  }
}
