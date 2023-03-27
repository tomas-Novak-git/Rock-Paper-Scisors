// this function generates choice for computer
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
        if (computerChoice === 1){
        return computerResult = "rock";
    } else if (computerChoice === 2) {
        return computerResult = "paper"
    } else (computerChoice === 3)
        return computerResult = "scissors"
}
// variables that stores player choices and computers choices + points //
let playerSelection = prompt("Rock, Paper or Scissors???");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
let computerPoints = 0;
let playerPoints = 0;
// 1 Round function 

function playRound(playerSelection, computerSelection) {
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
console.log(playRound(playerSelection, computerSelection))
console.log("Player: " + playerPoints + " | " + "Computer: " + computerPoints)
