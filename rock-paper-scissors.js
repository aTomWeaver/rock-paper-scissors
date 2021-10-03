let playerScore = 0;
let computerScore = 0;
let tiedGame = 0;

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
let selector = '';

const playerScoreDisplay = document.getElementById('player-score-display');
const cpuScoreDisplay = document.getElementById('cpu-score-display');
const tieScoreDisplay = document.getElementById('tie-score-display');



function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log(`You: ${playerSelection} \nCPU: ${computerSelection} `)
    if (playerSelection == computerSelection) {
        tiedGame++;
        return tieScoreDisplay.innerText = `TIE: ${tiedGame}`;
    } else if (playerSelection == 'rock'){
        if (computerSelection == 'paper') {
            computerScore++;
            return cpuScoreDisplay.innerText = `CPU: ${computerScore}`;
        } else {
            playerScore++;
            return playerScoreDisplay.innerText = `YOU: ${playerScore}`;
        }
    } else if (playerSelection == 'paper'){
        if (computerSelection == 'scissors') {
            computerScore++;
            return cpuScoreDisplay.innerText = `CPU: ${computerScore}`;
        } else {
            playerScore++;
            return playerScoreDisplay.innerText = `YOU: ${playerScore}`;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            return cpuScoreDisplay.innerText = `CPU: ${computerScore}`;
        } else {
            playerScore++;
            return playerScoreDisplay.innerText = `YOU: ${playerScore}`;
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

// function game() {
//     // plays 5 rounds 
//     for (i = 0; i < 5; i++) {
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     console.log(`***FINAL SCORE***\nYou: ${playerScore}\nComputer: ${computerScore}\nTies: ${tiedGame}\n\n` + getWinner(playerScore, computerScore));
// }

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');

playerRock.addEventListener('click', () => {
    playRound('rock', computerSelection);
});
playerPaper.addEventListener('click', () => {
    playRound('paper', computerSelection);
});
playerScissors.addEventListener('click', () => {
    playRound('scissors', computerSelection);
});


