const getPlayerChoice = (userInput) => {
    userInput = prompt(
        "Choose rock, paper or scissors?"
    ).toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors"
    ) {
        return userInput;
    } else {
        alert("Error! Please enter a valid input. Rock, Paper or Scissors.");
    }
};

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const winner = (userChoice, computerChoice) => {
    let winnerMessage = `You won! ${userChoice} beats ${computerChoice}`;
    let loserMessage = `You lost! ${computerChoice} beats ${userChoice}`;

    if (userChoice === computerChoice) {
        return "The game is a tie!";
    } else if (userChoice === "rock") {

        if (computerChoice === "paper") {
            return loserMessage;
        } else {
            return winnerMessage;
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return loserMessage;
        } else {
            return winnerMessage;
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return loserMessage;
        } else {
            return winnerMessage;
        }
    }
};

const playGame = () => {
    const userChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    alert(`the computer picked ${computerChoice}`);
    alert(winner(userChoice, computerChoice));

};

playGame();

