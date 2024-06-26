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
            console.log("Tie! Go again.");
        } else if (computerChoice === "paper") {
            console.log("You Lose! Paper beats Rock.");
            computerScore = ++computerScore;
        } else {
            console.log("You Win! Rock beats Scissors.");
            userScore = ++userScore;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("Tie! Go again.");
        } else if (computerChoice === "scissors") {
            console.log("You Lose! Scissors beats Paper.");
            computerScore = ++computerScore;
        } else {
            console.log("You Win! Paper beats Rock.");
            userScore = ++userScore;
        }
    } else {
        if (computerChoice === "scissors") {
            console.log("Tie! Go again.");
        } else if (computerChoice === "rock") {
            console.log("You Lose! Rock beats Scissors.");
            computerScore = ++computerScore;
        } else {
            console.log("You Win! Scissors beats Paper.");
            userScore = ++userScore;
        }
    }
}

function playGame() {
    let gameCount = 0;
    while (gameCount < 5) {
        console.log("\n")
        var computerChoice = getComputerChoice();
        var userChoice = getUserChoice();
        playRound(userChoice, computerChoice);
        console.log("User Score: " + userScore)
        console.log("Computer Score: " + computerScore)
        gameCount = ++gameCount;
    }
    console.log("\n")
    if (userScore > computerScore) {
        console.log("Congratulations! You win the game.")
    } else {
        console.log("Unlucky. You lose the game.")
    }
}

playGame();
