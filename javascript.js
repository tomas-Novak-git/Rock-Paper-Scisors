const options = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameText = document.getElementById("gameText");
const gameNumber = document.getElementById("gameNumber");
const gameMsg = document.getElementById("gameMsg");
const playerPoints = document.getElementById("playerPoints");
const compPoints = document.getElementById("compPoints");
// Computer produced choice
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
// button event listeners. Starts 1 round 
rock.addEventListener('click', (e) => {
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    gameNumber.textContent = `Round ${gameCount}`;
});
paper.addEventListener('click', (e) => {
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    gameNumber.textContent = `Round ${gameCount}`;
})
scissors.addEventListener('click', (e) => {
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    gameNumber.textContent = `Round ${gameCount}`;
})


// Player and Comp choices
let playerSelection = "";
const computerSelection = getComputerChoice();

//score
let scorePlayer = 0;
let scoreComputer = 0;
let gameCount = 0;


//  winner deciding function
function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (
        (playerSelection === "scissors" && computerSelection === "paper")
     || (playerSelection === "paper" && computerSelection === "rock")
     || (playerSelection === "rock" && computerSelection === "scissors")
     ){
        return "Player";
     }
     else {
        return "Computer";
     }
}



// One round of game
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    gameCount++;
    if (result == "Tie"){
        gameMsg.textContent = "It's a Tie! Nobody gets point." ;
    }
    else if(result == "Player"){
        scorePlayer++;
        gameMsg.textContent = `You win this round! Your ${playerSelection} beats ${computerSelection}.`;
        playerPoints.textContent =`${scorePlayer}`
    }
    else{
        scoreComputer++;
        gameMsg.textContent = `You Lose this round. Comps ${computerSelection} beats ${playerSelection}.`;
        compPoints.textContent =`${scoreComputer}`

    }
}


