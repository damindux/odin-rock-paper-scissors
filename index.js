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
    let pSelect = document.getElementById("player-text");
    let cSelect = document.getElementById("computer-text");

    pSelect.innerHTML = playerSelection;
    cSelect.innerHTML = computerSelection;

    if (playerSelection === computerSelection) {
        pSelect.style.color = "white";
        cSelect.style.color = "white";
        return ["It's a Tie!", -1];
    }

    if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {

        cSelect.style.color = "orange";
        pSelect.style.color = "white";
        return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0];
    } else {
        pSelect.style.color = "orange";
        cSelect.style.color = "white";
        return [`You Won! ${playerSelection} beats ${computerSelection}`, 1];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let textOfGame = document.getElementById("game-text");
    let modal = document.getElementById("winner-modal");
    let span = document.getElementsByClassName("close")[0];
    let winText = document.getElementById("winner-text");

    function handleRound(playerSelection) {
        let [gameText, winOrLose] = playRound(playerSelection, getComputerChoice());

        textOfGame.innerHTML = gameText;

        if (winOrLose === 1) {
            playerScore++;
        } else if (winOrLose === 0) {
            computerScore++;
        }

        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("computer-score").innerHTML = computerScore;

        if (playerScore === 5 || computerScore === 5) {
            displayModal(playerScore, computerScore);
        }

        function displayModal(playerScore, computerScore) {
            let winner = playerScore === 5 ? "Player" : "Computer";
            winText.innerHTML = `${winner} Wins!`;
            modal.style.display = "block";

            span.addEventListener("click", function () {
                modal.style.display = "none";
                resetGame();
            });

            window.addEventListener("click", function (e) {
                if (e.target == modal) {
                    modal.style.display = "none";
                    resetGame();
                }
            });
        }

        function resetGame() {
            playerScore = 0;
            computerScore = 0;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("player-text").innerHTML = "Player";
            document.getElementById("computer-text").innerHTML = "Computer";
            document.getElementById("player-text").style.color = "white";
            document.getElementById("computer-text").style.color = "white";
            textOfGame.innerHTML = "Click your choice to start!";
        }

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