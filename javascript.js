const options = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Computer produced choice
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
rock.addEventListener('click', playRound);
paper.addEventListener('click', (playRound("paper", computerSelection)));
scissors.addEventListener('click', (playRound("scissors", computerSelection)));
//score
let scorePlayer = 0;
let scoreComputer = 0;


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
        scorePlayer += 1;
        return "Player";
     }
     else {
        scoreComputer += 1;
        return "Computer";
     }
}



// One round of game
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        scorePlayer +1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        scoreComputer = +1;
        return `You Lose ${computerSelection} beats ${playerSelection}`
    }
}

let playerSelection = "";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


// Looping funciton that recalls game 5 times and gives points. at 5th, announces winner.
// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     for (let i = 0; i < 5; i++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//     if (checkWinner(playerSelection, computerSelection) == "Player"){
//         scorePlayer++;
//     } else if(checkWinner(playerSelection, computerSelection) == "Computer")
//         scoreComputer++;
//     }
//     if(scorePlayer > scoreComputer){
//         console.log(`Player is the winner with ${scorePlayer} points`);
//     } else if(scoreComputer > scorePlayer){
//         console.log(`Computer is the winner with ${scoreComputer} points`)
//     }
// game()