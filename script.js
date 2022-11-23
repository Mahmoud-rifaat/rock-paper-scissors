let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let randomIndex = Math.floor((Math.random() * 3));
    let computerChoice = choices[randomIndex];
    return computerChoice;
}
