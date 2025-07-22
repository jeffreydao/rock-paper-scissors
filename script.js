const options = ["rock", "paper", "scissors"];

function getHumanChoice() {
    let sign = prompt("Select your hand").toLowerCase();
    if (options.includes(sign)) {
        return sign;
    } else {
        alert("Please select rock, paper, or scissors");
        return getHumanChoice();
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return options[getRandomInt(3)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
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

// Loop until someone gets 2 points
while (humanScore < 2 && computerScore < 2) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
}

if (humanScore === 2) {
    console.log(`You won the match! Final score: ${humanScore} to ${computerScore}`);
} else {
    console.log(`You lost the match. Final score: ${humanScore} to ${computerScore}`);
}
