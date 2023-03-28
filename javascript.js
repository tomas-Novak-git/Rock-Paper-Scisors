const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

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

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose ${computerSelection} beats ${playerSelection}`
    }
}
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player"){
        scorePlayer++;
    } else if(checkWinner(playerSelection, computerSelection) == "Computer")
        scoreComputer++;
    }
    if(scorePlayer > scoreComputer){
        console.log(`Player is the winner with ${scorePlayer} points`);
    } else if(scoreComputer > scorePlayer){
        console.log(`Computer is the winner with ${scoreComputer} points`)
    }
}
game()