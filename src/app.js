
const player1btn = document.querySelector("#player1add");
const player2btn = document.querySelector("#player2add");
const resetbtn = document.querySelector("#reset");
const player1Display = document.querySelector("#score1Display");
const player2Display = document.querySelector("#score2Display");
const victoryCond = document.querySelector("#playto");

let player1Score = 0;
let player2Score = 0;

let endScore = parseInt(victoryCond.value);
let gameOver = false;

player1btn.addEventListener("click", () => {
    if (!gameOver) {
        player1Score++;
        if (player1Score === endScore) {
            gameOver = true;
            player1Display.classList.add("winner");
            player2Display.classList.add("loser");
        }
        player1Display.textContent = player1Score;
    }
});

player2btn.addEventListener("click", () => {
    if (!gameOver) {
        player2Score++;
        if (player2Score === endScore) {
            gameOver = true;
            player2Display.classList.add("winner");
            player1Display.classList.add("loser");
        }
        player2Display.textContent = player2Score;
    }
});

victoryCond.addEventListener("change", () => {
    if (parseInt(victoryCond.value) > endScore) {
        gameOver = false;
        endScore = parseInt(victoryCond.value);
        resetDisplayColors();
    }
})

resetbtn.addEventListener("click", () => {
    player1Score = player2Score = 0;
    player1Display.textContent = player1Score;
    player2Display.textContent = player2Score;
    resetDisplayColors();
    gameOver = false;
})

function resetDisplayColors() {
    player1Display.classList.remove("winner", "loser");
    player2Display.classList.remove("winner", "loser");
}