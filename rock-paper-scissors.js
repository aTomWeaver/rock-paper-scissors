let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    // returns a random answer for the computer
    let x = Math.random();
    if (x < 0.3333) {
        return 'rock';
    } else if (x > .3333 && x < .6666) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Selection: ').toLowerCase();
    computerSelection = computerPlay();
    console.log(`You: ${playerSelection} \nCPU: ${computerSelection} `)
    if (playerSelection == computerSelection) {
        return 'Tie!';
    } else if (playerSelection == 'rock'){
        if (computerSelection == 'paper') {
            computerScore++
            return 'you lose; paper beats rock';
        } else {
            playerScore++
            return 'you win; rock beats scissors';
        }
    } else if (playerSelection == 'paper'){
        if (computerSelection == 'scissors') {
            computerScore++
            return 'you lose; scissors beats paper';
        } else {
            playerScore++
            return 'you win; paper beats rock';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++
            return 'you lose; rock beats scissors';
        } else {
            playerScore++
            return 'you win; scissors beats paper';
        }
    }

}

function getWinner(playerScore, computerScore) {
    if (computerScore == playerScore){
        return 'TIE!'
    } else if (computerScore > playerScore) {
        return 'YOU LOSE!'
    } else {
        return 'YOU WIN!'
    }
}

function game() {
    // plays 5 rounds 
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`***FINAL SCORE***\nYou: ${playerScore}\nComputer: ${computerScore}\n\n` + getWinner(playerScore, computerScore));
}

game();
