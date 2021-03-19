
const player1 = {
    button: document.querySelector("#player1add"),
    color: "has-text-success",
    display: document.querySelector("#score1Display"),
    name: "Player One",
    score: 0,
};

const player2 = {
    button: document.querySelector("#player2add"),
    color: "has-text-link",
    display: document.querySelector("#score2Display"),
    name: "Player Two",
    score: 0,
};

const resetbtn = document.querySelector("#reset");
const victoryCond = document.querySelector("#playto");
const resultingWinner = document.querySelector("#winner");

let endScore = parseInt(victoryCond.value);
let gameOver = false;

player1.button.addEventListener("click", function () {
    updateScore(player1, player2)
});

player2.button.addEventListener("click", function () {
    updateScore(player2, player1)
});

victoryCond.addEventListener("change", () => {
    if (parseInt(victoryCond.value) > endScore) {
        gameOver = false;
        endScore = parseInt(victoryCond.value);
        hideWinner()
    }
})

function updateScore(scoringPlayer, rival) {
    if (!gameOver) {
        scoringPlayer.score++;
        if (scoringPlayer.score === endScore) {
            gameOver = true;
            scoringPlayer.display.classList.add("has-text-success");
            rival.display.classList.add("has-text-danger");
            announceWinner(scoringPlayer);
        }
        scoringPlayer.display.textContent = scoringPlayer.score;
    }
}

resetbtn.addEventListener("click", () => {
    player1.score = player2.score = 0;
    player1.display.textContent = player1.score;
    player2.display.textContent = player2.score;
    gameOver = false;
    endScore = parseInt(victoryCond.value);
    hideWinner()
})

function resetDisplayColors() {
    player1.display.classList.remove("has-text-success", "has-text-danger");
    player2.display.classList.remove("has-text-success", "has-text-danger");
}

function disableButtons() {
    player1.button.setAttribute("disabled", "");
    player2.button.setAttribute("disabled", "");
}

function enableButtons() {
    player1.button.removeAttribute("disabled");
    player2.button.removeAttribute("disabled");
}

function announceWinner(winner) {
    resultingWinner.textContent = `${winner.name} wins!`;
    resultingWinner.classList.add(winner.color);
    disableButtons()
}

function hideWinner() {
    resultingWinner.classList.remove("has-text-success", "has-text-link");
    resultingWinner.textContent = null;
    enableButtons();
    resetDisplayColors();
}