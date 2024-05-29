let secretNumber = 0;
let score = 0;

const message = document.getElementById("message");
const checkBtn = document.getElementById("checkBtn");
const guessBox = document.getElementById("guessBox");
const numberBox = document.getElementById("numberBox");

function doStart() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    guessBox.value = "";
    score = 10;
    document.getElementById("score").innerHTML = score;
    checkBtn.classList.remove("hidden");
}

doStart();

checkBtn.addEventListener("click", function() {
    let guess = Number(guessBox.value);
    if (guess === secretNumber) {
        message.innerHTML = "Success!!!!";
        numberBox.innerHTML = secretNumber;
        document.body.style.backgroundColor = "green";
        checkBtn.classList.add("hidden");
    } else {
        score = score - 1;
        document.getElementById("score").innerHTML = score;
        if (score === 0) {
            message.innerHTML = "Game over!!!!";
            checkBtn.classList.add("hidden");
        } else if (guess > secretNumber) {
            message.innerHTML = "Too high!!!!";
        } else if (guess < secretNumber) {
            message.innerHTML = "Too low!!!!";
        }
    }
});

document.getElementById("againBtn").addEventListener('click', function() {
    doStart();
    document.body.style.backgroundColor = "black";
    numberBox.innerHTML = "?";
    message.innerHTML = "Start guessing....";
    guessBox.innerHTML = "";
});
