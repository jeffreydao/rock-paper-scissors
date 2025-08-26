const options = ["rock", "paper", "scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  return options[getRandomInt(3)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  console.log(`You chose: ${humanChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    return `It's a tie! Current score: ${humanScore} to ${computerScore}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}. Current score: ${humanScore} to ${computerScore}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}. Current score: ${humanScore} to ${computerScore}`;
  }
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
