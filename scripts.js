
function getComputerChoice() {
    let x = Math.round(Math.random() * 10);
    
    if (x < 3) {
        return "rock";
    } else if (x >= 3 && x < 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let comp = computerSelection;
    let result;

    if (player === comp) {
        result = "It's a draw this time."
    }   else if (player == "rock" && comp == "scissors") {
        result = "You Win ! Rock beats Scissors";
    }   else if (player == "paper" && comp == "rock") {
        result = "You Win ! Paper beats Rock";
    }   else if (player == "scissors" && comp == "paper") {
        result = "You Win ! Scissors beats Paper";
    }   else {
        result = "You Lose ! " + comp[0].toUpperCase() + comp.slice(1).toLowerCase() + " beats " + player[0].toUpperCase() + player.slice(1).toLowerCase();
    } 
    return result;
} 

function game() {
    let wins = 0;
    let loss = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Type rock paper or scissors");

        let string = playRound(playerSelection, computerSelection);
        console.log(string);

        if (string.includes("Win")) {
            wins++;
        }

        if (string.includes("Lose")) {
            loss++;
        }
    }
    if (wins > loss) {
        console.log("You are the winner")
    } else {
        console.log("LOSER")
    }
}

//Below here is just for testing purposes
//const playerSelection = "rock";
