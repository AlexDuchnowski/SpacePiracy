"use strict";
let hexes = [
    'DEC1DE',
    'FECE5',
    'FEE',
    'CA5E',
    'FACE',
    'C0D',
    '50',
    '15',
    'DEAD',
    '51DE',
    '5AFE5',
    'BA55'
];
let answers = hexes.map(h => parseInt(h, 16)).sort((n1, n2) => n1 - n2);
let container = document.getElementById('response-container');
let inputBox = document.getElementById('guess');
let response = document.createElement('a');
let defaultMessage = "Type a number and press Enter to make a guess.";
response.innerText = defaultMessage;
container.appendChild(response);
function guessResults(guess) {
    let guessVal = parseInt(guess, 16);
    let hline = "+" + "-".repeat(4) + "+" + "-".repeat(14) + "+\n";
    let table = "Results for " + guess + "\n" + hline;
    let hit = false;
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        let row = "| " + (i + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " |";
        if (guessVal < answer) {
            row += " too small" + "\xa0".repeat(4);
        }
        else if (guessVal == answer) {
            row += " just right!" + "\xa0".repeat(2);
            hit = true;
        }
        else {
            row += " too big" + "\xa0".repeat(6);
        }
        row += "|\n";
        table += row + hline;
    }
    return [table, hit];
}
function processGuess() {
    let guess = inputBox.value;
    guess = guess.toUpperCase();
    // console.log('Guess:' + guess)
    response.style.color = "cadetblue";
    if (!guess) {
        response.innerText = defaultMessage;
    }
    else if (guess.match('(^([A-F]|[0-9])+$)')) {
        let [table, hit] = guessResults(guess);
        response.innerText = table;
        if (hit) {
            response.style.color = "green";
        }
    }
    else {
        response.innerText = guess + " isn't a number I recognize.";
    }
    // inputBox.value = '' // This clears the input field upon completion.
}
