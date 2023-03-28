// this function generates choice for computer
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
        if (computerChoice === 1){
        return "rock";
    } else if (computerChoice === 2) {
        return "paper"
    } else (computerChoice === 3)
        return "scissors"
}
// variables that stores player choices and computers choices. 
let playerSelection = '';
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors???");
    if (playerSelection == computerSelection) {
    return "Amazing, it's a DRAW!!!"
    } else if (playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors"){
        playerPoints = +1;
        return `"You won this round, your: "${playerSelection}" beats computers: "${computerSelection}"!"`;
    } else {
        computerPoints = +1;
    return `"You lose. Computers : "${computerSelection}" beats your: "${playerSelection}"!"`;
    }
}
// Variables that stores points and prints results in console
let computerPoints = 0;
let playerPoints = 0;
console.log(playRound(playerSelection, computerSelection));
console.log("Player: " + playerPoints + " | " + "Computer: " + computerPoints);