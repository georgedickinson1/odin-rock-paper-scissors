function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper or Scissors? ").toLowerCase().trim();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    }
    else {
        console.log("Not an option. Try again!");
        getUserChoice();
    }
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            document.querySelector(".round-results").textContent = "Tie! Go again.";
        } else if (computerChoice === "paper") {
            document.querySelector(".round-results").textContent = "You Lose! Paper beats Rock.";
            computerScore = ++computerScore;
        } else {
            document.querySelector(".round-results").textContent = "You Win! Rock beats Scissors.";
            userScore = ++userScore;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "paper") {
            document.querySelector(".round-results").textContent = "Tie! Go again.";
        } else if (computerChoice === "scissors") {
            document.querySelector(".round-results").textContent = "You Lose! Scissors beats Paper.";
            computerScore = ++computerScore;
        } else {
            document.querySelector(".round-results").textContent = "You Win! Paper beats Rock.";
            userScore = ++userScore;
        }
    } else {
        if (computerChoice === "scissors") {
            document.querySelector(".round-results").textContent = "Tie! Go again.";
        } else if (computerChoice === "rock") {
            document.querySelector(".round-results").textContent = "You Lose! Rock beats Scissors.";
            computerScore = ++computerScore;
        } else {
            document.querySelector(".round-results").textContent = "You Win! Scissors beats Paper.";
            userScore = ++userScore;
        }
    }
}

const gameContainer = document.querySelector(".game-container");
gameContainer.addEventListener("click", (event) => {
    if (event.target.className === "rock" || event.target.className === "paper" || event.target.className === "scissors") {
        let userChoice = event.target.className;
        let computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
        trackScore();
    };
});

let gameCount = 0;

const gameResultsUser = document.querySelector(".game-results.user.score");
const gameResultsComputer = document.querySelector(".game-results.computer.score");
const gameResultsOutcome = document.querySelector(".game-results.outcome");


function trackScore() {
    if (gameCount === 0) {
        gameResultsOutcome.textContent = "";
    }
    gameCount++;
    gameResultsUser.textContent = userScore;
    gameResultsComputer.textContent = computerScore;

    if (userScore === 3 || computerScore === 3) {
        if (userScore > computerScore) {
            gameResultsOutcome.textContent = "Congratulations! You win the game."
            gameCount = 0;
            userScore = 0;
            computerScore = 0;
        } else if (userScore < computerScore) {
            gameResultsOutcome.textContent = "Unlucky. You lose the game."
            gameCount = 0;
            userScore = 0;
            computerScore = 0;
        };
    };
};

