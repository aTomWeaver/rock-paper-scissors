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
            if (playerSelection == 'rock'){
                    playerRock.classList.add('selected-tie');
                    cpuRock.classList.add('selected-tie');
            } else if (playerSelection == 'paper') {
                    playerPaper.classList.add('selected-tie');
                    cpuPaper.classList.add('selected-tie');
            } else {
                    playerScissors.classList.add('selected-tie');
                    cpuScissors.classList.add('selected-tie');
            }
            tiedGame++;
            return tieScoreDisplay.innerText = `TIE: ${tiedGame}`;
    } else if (playerSelection == 'rock'){
            if (computerSelection == 'paper') {
                    playerRock.classList.add('selected-lose');
                    cpuPaper.classList.add('selected-win')
                    computerScore++;
                    return cpuScoreDisplay.innerText = `CPU: ${computerScore}`;
            } else {
                    playerRock.classList.add('selected-win');
                    cpuScissors.classList.add('selected-lose');
                    playerScore++;
                    return playerScoreDisplay.innerText = `YOU: ${playerScore}`;
            }
    } else if (playerSelection == 'paper'){
            if (computerSelection == 'scissors') {
                    playerPaper.classList.add('selected-lose');
                    cpuScissors.classList.add('selected-win');
                    computerScore++;
                    return cpuScoreDisplay.innerText = `CPU: ${computerScore}`;
            } else {
                    playerPaper.classList.add('selected-win');
                    cpuRock.classList.add('selected-lose');
                    playerScore++;
                    return playerScoreDisplay.innerText = `YOU: ${playerScore}`;
            }
    } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                    playerScissors.classList.add('selected-lose');
                    cpuRock.classList.add('selected-win');
                    computerScore++;
                    return cpuScoreDisplay.innerText = `CPU: ${computerScore}`;
            } else {
                    playerScissors.classList.add('selected-win');
                    cpuPaper.classList.add('selected-lose')
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
const cpuRock = document.getElementById('cpu-rock');
const cpuPaper = document.getElementById('cpu-paper');
const cpuScissors = document.getElementById('cpu-scissors');

const buttons = document.querySelectorAll('.button');

function removeTransition(e) {
    if (e.propertyName !== 'transform') console.log('didnt work');
    this.classList.remove('selected-tie');
    this.classList.remove('selected-win');
    this.classList.remove('selected-lose');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

playerRock.addEventListener('click', () => {
    playRound('rock', computerSelection);
});
playerPaper.addEventListener('click', () => {
    playRound('paper', computerSelection);
});
playerScissors.addEventListener('click', () => {
    playRound('scissors', computerSelection);
});



