let round=1;
let playing = false;
const choices= ["rock", "paper", "scissors"];

function startGame() {
    round =1;
    playing = true;
    document.getElementById("output").innerHTML = "";
    document.getElementById("choices").style.display = "block";
    document.getElementById("output").innerHTML = "Game started! Pick your move.";
}

// main game function
function playGame(userChoice) {
    if (!playing) return;

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "Round " + round + ": Tie 🤜🤛";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Round " + round + ": You WIN 🎉";
        playing = false;
    } else {
        result = "Round " + round + ": You lose 😔";
    }

    document.getElementById("output").innerHTML += "<p>" + result + "</p>";

    round++;

    if (round > 3 && playing) {
        document.getElementById("output").innerHTML += "<p>Game over! You didn't win.</p>";
        playing = false;
    }
}
