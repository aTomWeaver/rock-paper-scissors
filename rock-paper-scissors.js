function computerPlay() {
    let x = Math.random();
    if (x < 0.3333) {
        return 'rock';
    } else if (x > .3333 && x < .6666) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

const playerWin = () => console.log('You win this round!');
const playerLose = () => console.log('You lose this round.');

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('Tie!');
    } else if (playerSelection == 'rock'){
        if (computerSelection == 'paper') {
            playerLose();
        } else {
            playerWin();
        }
    } else if (playerSelection == 'paper'){
        if (computerSelection == 'scissors') {
            playerLose();
        } else {
            playerWin();
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            playerLose();
        } else {
            playerWin();
        }
    }

}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt('Selection: ');
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
}

game();
// console.log(playRound(playerSelection, computerSelection));