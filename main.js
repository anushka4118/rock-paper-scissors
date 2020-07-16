let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function handlePressButtonEvent(event) {
        // How do we get the player's selection?
        let playerSelection = button.id;
        const gameWinner = document.querySelector('#gameWinner');
        gameWinner.textContent = '';

        const playerSelectionPara = document.querySelector('#playerSelection')
        playerSelectionPara.textContent = 'You selected ' + playerSelection;

        let computerSelection = computerPlay();

        const computerSelectionPara = document.querySelector('#computerSelection');
        computerSelectionPara.textContent = 'Computer selected ' + computerSelection;

        let winner = playRound(playerSelection, computerSelection);
        let winnerText;

        switch (winner) {
            case 0:
                winnerText = "You lose";
                computerScore++;
                break;

            case 1:
                winnerText = "It's a tie";
                break;

            case 2:
                winnerText = "You win!";
                playerScore++;
                break;
        }

        const roundWinner = document.querySelector('#roundWinner');
        roundWinner.textContent = winnerText;

        const runningScore = document.querySelector('#runningScore');
        runningScore.textContent = "Your score: " + playerScore + " Computer's score: " + computerScore;

        // Check if the game is over

        if (playerScore == 3 || computerScore == 3) {

            // Figure out who won
            let gameWinnerText;

            if (playerScore > computerScore) {
                gameWinnerText = 'Congrats you win the game!';
            } else {
                gameWinnerText = 'Sorry, computer wins.';
            }

            const gameWinner = document.querySelector('#gameWinner');
            gameWinner.textContent = gameWinnerText;

            playerScore = 0;
            computerScore = 0;

        }

    });
});

// getting the computer's choices

function computerPlay() {
    compChoice = Math.floor(Math.random() * 3) + 1;
    switch (compChoice) {
        case 1:
            compChoice = 'rock';
            break;
        case 2:
            compChoice = 'paper';
            break;
        case 3:
            compChoice = 'scissors';
            break;
    }
    return compChoice;
}

// finding a winner in each round of play

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 2;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 2;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 2;
    } else if (playerSelection === computerSelection) {
        return 1;
    } else {
        return 0;
    }
}