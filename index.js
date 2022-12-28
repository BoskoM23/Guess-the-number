let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
//Function that display the number of tries and calculate the secret number
function displayNumbers() {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
}
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
//Here we check is the number we guessed right or not
document.querySelector(".check").addEventListener("click", function () {
    const quess = Number(document.querySelector(".guess").value);
    console.log(quess);
    if (!quess) {
        displayMessage("No number");
    } else if (quess === secretNumber) {
        displayMessage("Correct number");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "3em";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (quess != secretNumber) {
        if (score > 1) {
            displayMessage(quess > secretNumber ? "Too high" : "Too low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost the game");
            document.querySelector(".score").textContent = 0;
        }
    }
});
//When we want to play again from the start
document.querySelector(".again").addEventListener("click", function () {
    displayNumbers();
    document.querySelector(".message").textContent = "Start quessing...";
    displayMessage("Start guessing");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "3em";
});