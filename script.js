const options = ["rock", "paper", "scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  return options[getRandomInt(3)];
}

let humanScore = 0;
let computerScore = 0;
let isComplete = false;

function playRound(humanChoice) {
  if (isComplete) {
    return "Game over! Please reset to play again.";
  }

  console.log(`You chose: ${humanChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);

  let result = "";
  if (humanChoice === computerChoice) {
    result = `It's a tie! Current score: ${humanScore} to ${computerScore}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    if (humanScore === 5) {
      isComplete = true;
      result = `You won the match! Final score: ${humanScore} to ${computerScore}`;
    } else {
      result = `You win! ${humanChoice} beats ${computerChoice}. Current score: ${humanScore} to ${computerScore}`;
    }
  } else {
    computerScore++;
    if (computerScore === 5) {
      isComplete = true;
      result = `You lost the match. Final score: ${humanScore} to ${computerScore}`;
    } else {
      result = `You lose! ${computerChoice} beats ${humanChoice}. Current score: ${humanScore} to ${computerScore}`;
    }
  }
  return result;
}

function resetGame() {
    isComplete = false;
    computerScore = 0;
    humanScore = 0;
    const result = "Resetting the game, select any button to play agian.";

    return result
}

const resultDiv = document.getElementById("result");

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  const result = playRound("rock");
  resultDiv.textContent = result;
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  const result = playRound("paper");
  resultDiv.textContent = result;
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
  const result = playRound("scissors");
  resultDiv.textContent = result;
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  const result = resetGame();
  resultDiv.textContent = result;
});

