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
    function playGame(playerChoice, computerChoice) {
    let round = 0
    while(round < 6) {
    var computerChoice = computerPlay();
    var playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if(playerChoice === computerChoice) {
      console.log('Tie!');
      round++;
    }
    else if(playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        console.log(`Player chose rock and computer chose scissors! The player wins! Player: ${playerScore} Computer:${computerScore}`);
        round++;
    }
    else if(playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        round++;
        console.log(`Player chose paper and computer chose rock! The player wins! Player: ${playerScore} Computer:${computerScore}`);
    }
    else if(playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        round++;
        console.log(`Player chose scissors and computer chose paper! The player wins! Player: ${playerScore} Computer:${computerScore}`);
    }
    else {
        computerScore++;
        console.log(`The player chose ${playerChoice} and the computer chose ${computerChoice}! The computer wins! Player: ${playerScore} Computer: ${computerScore}.`)
    }
  }
  }


computerPlay()
console.log(playGame('rock'))

