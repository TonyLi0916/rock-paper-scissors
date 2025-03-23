let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

const scores = document.querySelector("#scores");
const resultsText = document.querySelector("#results-text");

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
    if (roundCount >= maxRounds) return;

    const result = document.createElement("p");
    let message = `You chose ${humanChoice}, computer chose ${computerChoice}. `;

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            message += "It's a tie";
        }
        else if (computerChoice === "paper") {
            message += "Computer wins!";
            computerScore++;
        }
        else {
            message += "You win!";
            humanScore++;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message += "You win!";
            humanScore++;
        }
        else if (computerChoice === "paper") {
            message += "It's a tie";
        }
        else {
            message += "Computer wins!";
            computerScore++
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            message += "Computer wins!";
            computerScore++;
        }
        else if (computerChoice === "paper") {
            message += "You win!";
            humanScore++;
        }
        else {
            message += "It's a tie";
        }
    }
    result.textContent = message;
    resultsText.append(result);

    roundCount++;
    updateScore();

    if (roundCount === maxRounds) {
        showFinalWinner();
        playAgain();
    }

}

function playAgain() {
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "center";

    const playAgain = document.createElement("button");
    playAgain.style.backgroundColor = "#dd3508";
    playAgain.textContent = "PLAY AGAIN?";

    wrapper.appendChild(playAgain);
    scores.appendChild(wrapper);

    playAgain.addEventListener("click", resetGame);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

    resultsText.textContent = "GAME RESULTS";

    updateScore();
}

function updateScore() {
    scores.style.color = "red";
    scores.innerHTML = `<p>Player: ${humanScore} &nbsp;&nbsp; Computer: ${computerScore}</p>`;
}

function showFinalWinner() {
    const finalResult = document.createElement("p");
    if (humanScore > computerScore) {
        finalResult.textContent = "🎉 You win the game!";
    } else if (computerScore > humanScore) {
        finalResult.textContent = "💻 Computer wins the game!";
    } else {
        finalResult.textContent = "🤝 It's a tie game!";
    }
    resultsText.appendChild(finalResult);
}

["rock", "paper", "scissors"].forEach(choice => {
    const button = document.querySelector(`#${choice}`);
    button.addEventListener("click", () => {
        playRound(choice, getComputerChoice());
    });
});






