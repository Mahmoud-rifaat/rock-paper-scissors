let choices = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomIndex = Math.floor((Math.random() * 3));
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    const upperCasedPlayerSelection = playerSelection.toUpperCase();

    if(upperCasedPlayerSelection === computerSelection){
        return "DRAW!";
    }

    switch(upperCasedPlayerSelection){
        case 'ROCK':
            switch(computerSelection){
                case 'PAPER':
                    computerScore++;
                    return "You Lose! Paper beats Rock";
                case 'SCISSORS':
                    playerScore++;
                    return "You Win! Rock beats Scissors";
            }
            break;

        case 'PAPER':
            switch(computerSelection){
                case 'ROCK':
                    playerScore++;
                    return "You Win! Paper beats Rock";
                case 'SCISSORS':
                    computerScore++;
                    return "You Lose! Scissors beats Paper";
            }
            break;

        case 'SCISSORS':
            switch(computerSelection){
                case 'ROCK':
                    computerScore++;
                    return "You Lose! Rock beats Scissors";
                case 'PAPER':
                    playerScore++;
                    return "You Win! Scissors beats Paper";
            }
            break;

        default:
            return "Enter a valid choice!";
    }
}

function getPlayerChoice(){
    return prompt("Enter your choice(Rock, Paper or Scissors): ");
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
}


function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    console.log(playerScore > computerScore ? "Congratulations! You win the game."
    : (computerScore > playerScore ? "Game Over! you lose the game."
    : "The game is a DRAW!"));

    resetGame();
}

game();