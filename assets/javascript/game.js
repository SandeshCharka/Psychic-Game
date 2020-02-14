var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var computerguess = letters[Math.floor(Math.random() * letters.length)];
var userGuess = document.getElementById("guessessofar");
var userWins = document.getElementById("winc");
var userLosses = document.getElementById("lossc");
var userguessesleft = document.getElementById("guessesl");
var youwonorlost = document.getElementById("winorlose");
var guessarray = [];
var guessesleft = 9;
var wins = 0;
var losses = 0;

function updatelosses() {
    userLosses.textContent = " " + losses;
}

function updatewins() {
    userWins.textContent = " " + wins;
}

function updateguesses() {
    userguessesleft.textContent = " " + guessesleft;
}

function updatearray() {
    userGuess.textContent = " " + guessarray + " ";
}

function win() {
    youwonorlost.textContent = "You won!";
}

function loss() {
    youwonorlost.textContent = "You Lost :(";
}

function clear() {
    youwonorlost.textContent = "";
}

function emptyarray() {
    guessarray = [];
}

document.onkeyup = function (event) {
    guessesleft--;
    updateguesses();
    guessarray.push(event.key.toLowerCase())
    updatearray();
    clear();
    if (computerguess === event.key.toLowerCase()) {
        wins++;
        updatewins();
        computerguess = letters[Math.floor(Math.random() * letters.length)];
        console.log("new guess:" + computerguess);
        guessesleft = 9;
        updateguesses();
        emptyarray();
        win();
    }
    if (guessesleft === 0) {
        losses++;
        updatelosses();
        emptyarray();
        computerguess = letters[Math.floor(Math.random() * letters.length)];
        console.log("new guess:" + computerguess);
        guessesleft = 9;
        loss();
    }
};

console.log("current guess:" + computerguess);