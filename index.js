function getComputerChoice() {
    const choice = [
        "rock",
        "paper",
        "scissors"
    ];

    const random = Math.floor(Math.random() * choice.length);

    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    document.getElementById("player-text").innerHTML = playerSelection;
    document.getElementById("computer-text").innerHTML = computerSelection;

    if (playerSelection === computerSelection) {
        return ["It's a Tie!", -1];
    }

    if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {

        return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0];
    } else {
        return [`You Won! ${playerSelection} beats ${computerSelection}`, 1];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let textOfGame = document.getElementById("game-text");

    function handleRound(playerSelection) {
        let [gameText, winOrLose] = playRound(playerSelection, getComputerChoice());

        textOfGame.innerHTML = gameText;

        if (winOrLose === 1) {
            playerScore++;
        } else if (winOrLose === 0) {
            computerScore++;
        }

        if (playerScore === 5 || computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            if (computerScore === 5)
                textOfGame.innerHTML = "Computer Won the Game!";
            else
                textOfGame.innerHTML = "Player Won the Game!";
        }

        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("computer-score").innerHTML = computerScore;
    }

    document.getElementById("rock").addEventListener("click", function () {
        handleRound("rock");
    });
    document.getElementById("paper").addEventListener("click", function () {
        handleRound("paper");
    });
    document.getElementById("scissors").addEventListener("click", function () {
        handleRound("scissors");
    });
}

game();