
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
        result = `You Lose ! ${comp} beats ${player}`;
    }
    return result;
}

//Below here is just for testing purposes
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
