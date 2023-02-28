"use strict";
let hexes = ['51', '500', 'face'];
let answers = hexes.map(h => parseInt(h, 16));
let container = document.getElementById('response-container');
let inputBox = document.getElementById('guess');
let response = document.createElement('a');
let defaultMessage = "Type a number and press Enter to make a guess.";
response.innerText = defaultMessage;
container.appendChild(response);
function guessResults(guess) {
    let guessVal = parseInt(guess, 16);
    let hline = "+" + "-".repeat(4) + "+" + "-".repeat(20) + "+\n";
    let table = "Results for " + guess + "\n" + hline;
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        let row = "| " + (i + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " |";
        if (guessVal < answer) {
            row += " too small" + "\xa0".repeat(10);
        }
        else if (guessVal == answer) {
            row += " just right!" + "\xa0".repeat(8);
        }
        else {
            row += " too big" + "\xa0".repeat(12);
        }
        row += "|\n";
        table += row + hline;
    }
    return table;
}
function processGuess() {
    let guess = inputBox.value;
    guess = guess.toUpperCase();
    // console.log('Guess:' + guess)
    if (!guess) {
        response.innerText = defaultMessage;
    }
    else if (guess.match('(^([A-F]|[0-9])+$)')) {
        response.innerText = guessResults(guess);
    }
    else {
        response.innerText = guess + " isn't a number I recognize.";
    }
    // inputBox.value = '' // This clears the input field upon completion.
}
