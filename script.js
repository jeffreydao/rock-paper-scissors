const options = ["rock", "paper", "scissors"]

function getHumanChoice () {
    sign = prompt("Select your hand").toLowerCase();
    let isInArray = false;
    // Check if the input is one of the options
    // If it is, return the input; if not, alert the user and ask again
    isInArray = options.includes(sign)
    if (isInArray === true) {
        return sign
    } else
    {
        alert("Please select rock, paper, or scissors")
        return getHumanChoice()
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return options[getRandomInt(3)]
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let humanScore, computerScore = 0;

console.log(playRound(getHumanChoice(), getComputerChoice()))