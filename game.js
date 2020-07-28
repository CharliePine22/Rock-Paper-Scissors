function computerPlay() {
    var choice = Math.floor(Math.random() * 3 ) + 1
    if(choice == 1) {
        return 'rock';
    }
    else if(choice == 2) {
        return 'paper';
    }
    else {
        return 'scissors'
    }
} 

let computerScore = 0;
let playerScore = 0;
let round = 0
  
    function playGame(playerChoice, computerChoice) {
    var computerChoice = computerPlay();
    var playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();

    if(playerChoice === computerChoice) {
        return 'Tie!';
    }
    else if(playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        round++;
        return `Player chose rock and computer chose scissors! The player wins! Player: ${playerScore} Computer:${computerScore}`;
    }
    else if(playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        return `Player chose paper and computer chose rock! The player wins! Player: ${playerScore} Computer:${computerScore}`;
    }
    else if(playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        return `Player chose scissors and computer chose paper! The player wins! Player: ${playerScore} Computer:${computerScore}`;
    }
    else {
        computerScore++;
        return `The player chose ${playerChoice} and the computer chose ${computerChoice}! The computer wins! Player: ${playerScore} Computer: ${computerScore}.`
    }
  }



