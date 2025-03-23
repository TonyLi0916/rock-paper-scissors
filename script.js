let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let decision = Math.random();
    if (decision < 0.34) {
        return "rock";
    }
    else if (decision <= 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock") {
        if(computerChoice === "rock") {
            console.log("It's a tie!");
        }
        else if(computerChoice === "paper") {
            console.log("Computer wins!");
            computerScore++;
        }
        else {
            console.log("Human wins!");
            humanScore++;
        }
    }
    if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("Human wins!");
            humanScore++;
        }
        else if(computerChoice === "paper") {
            console.log("It's a tie!");
        }
        else {
            console.log("Computer wins!");
            computerScore++
        }
    }
    if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("Computer wins!");
            computerScore++;
        }
        else if(computerChoice === "paper") {
            console.log("Human wins!");
            humanScore++;
        }
        else {
            console.log("It's a tie!");
        }
    }
}

["rock", "paper", "scissors"].forEach(choice => {
    const button = document.querySelector(`#${choice}`);
    button.addEventListener("click", () => {
        playRound(choice, getComputerChoice());
    });
});






