let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice(){
    let randomIndex = Math.floor((Math.random() * 3));
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, ComputerSelection){
    const upperCasedPlayerSelection = playerSelection.toUpperCase();
    if(upperCasedPlayerSelection === ComputerSelection){
        return "DRAW!";
    }

    switch(upperCasedPlayerSelection){
        case 'ROCK':
            switch(computerSelection){
                case 'PAPER':
                    return "You Lose! Paper beats Rock";
                case 'SCISSORS':
                    return "You Win! Rock beats Scissors";
            }
            break;

        case 'PAPER':
            switch(computerSelection){
                case 'ROCK':
                    return "You Win! Paper beats Rock";
                case 'SCISSORS':
                    return "You Lose! Scissors beats Paper";
            }
            break;

        case 'SCISSORS':
            switch(computerSelection){
                case 'ROCK':
                    return "You Lose! Rock beats Scissors";
                case 'PAPER':
                    return "You Win! Scissors beats Paper";
            }
            break;

        default:
            return "Enter a valid choice!";
    }
}

/*
const playerSelection = "pAper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/