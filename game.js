const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const h3 = document.querySelector('h3');
const pscore = document.querySelector('#pscore');
const cscore = document.querySelector('#cscore');
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    var choice = Math.floor(Math.random() * 3 ) + 1; //generate a number 1-3 to find computer choice
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

let result; // simpler way of rewriting code?

    rock.addEventListener('click', () => {
        if(computerPlay() == 'rock') {
            result = `The computer chose rock and you chose rock! It's a tie! No change in score.`;
            h3.textContent = result;
            
        }
        else if(computerPlay() == 'paper') {
            result = `The computer chose paper and you chose rock! You lose! Computer Score +1!`;
            h3.textContent = result;
            computerScore++;
            cscore.textContent = computerScore;

     
        }
        else {
            result = `The computer chose scissors and you chose rock! You win! Player Score +1!`; 
            h3.textContent = result;
            playerScore++;
            pscore.textContent = playerScore;

        }
    });

    let playerPaper = paper.addEventListener('click', () => {
        if(computerPlay() == 'paper') {
            result = `The computer chose paper and you chose paper! It's a tie!`;
            h3.textContent = result;    
        }
        else if(computerPlay() == 'scissors') {
            result = `The computer chose scissors and you chose paper! You lose!`;
            h3.textContent = result;
            computerScore++;
            cscore.textContent = computerScore;
        }
        else {
            result = `The computer chose rock and you chose paper! You win!`; 
            h3.textContent = result;
            playerScore++;
            pscore.textContent = playerScore;
        }
        
    });

    let playerScissors = scissors.addEventListener('click', () => {
        if(computerPlay() == 'scissors') {
            result = `The computer chose scissors and you chose scissors! It's a tie!`;
            h3.textContent = result;    
        }
        else if(computerPlay() == 'rock') {
            result = `The computer chose rock and you chose scissors! You lose!`;
            h3.textContent = result;
            computerScore++;
            cscore.textContent = computerScore;
        }
        else {
            result = `The computer chose paper and you chose scissors! You win!`; 
            h3.textContent = result;
            playerScore++;
            pscore.textContent = playerScore;
        }
    })

function playGame(computerChoice) {
    computerChoice = computerPlay();
    if(playerScore == 5) {
        return h3.textContent = `The score is 5 to ${computerScore}! You win!`;
    }
    else if(computerScore == 5) {
        return h3.textContent = `The score is 5 to ${playerScore}! The computer wins!`;
    }
    
}


playGame();