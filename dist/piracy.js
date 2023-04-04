"use strict";
let passwords = [
    'A5C1C0DE',
    '0B51D1A5',
    'D1DAC1C5',
    '60DD55E5',
    'F0CEFEED',
    'AC1D1F1D',
    'AB5CE5E5',
    'DAABA5E5',
    '5AC1F1CE',
    'B51C1DEA',
    'A550C1AE',
    '6E0D51C5',
];
let container = document.getElementById('response-container');
let inputBox = document.getElementById('guess');
let errorColWidth = 60;
let response = document.createElement('a');
let defaultMessage = "Type a number in the field above and press Enter to make a guess.";
response.innerText = defaultMessage;
container.appendChild(response);
function hexFunctionMachine(f) {
    /**
     * Creates and returns a function which applies f to hex strings and returns
     * a string of the result, throwing an error if the result is not an integer.
     */
    return function (hex) {
        let result = f(parseInt(hex, 16));
        if (result % 1 != 0) {
            throw new Error(" ERROR: Transformation produced a non-integer result.");
        }
        else if (result < 0) {
            throw new Error(" ERROR: Transformation produced a negative result.");
        }
        return result.toString(16).toUpperCase();
    };
}
function simplifyHexString(hex) {
    return parseInt(hex, 16).toString(16).toUpperCase();
}
function reverseString(s) {
    if (s === "") {
        return "";
    }
    else {
        return reverseString(s.substring(1)) + s.charAt(0);
    }
}
function peelString(s) {
    if (s.length <= 1) {
        return s;
    }
    else {
        return s.charAt(0) + s.charAt(s.length - 1) + peelString(s.slice(1, -1));
    }
}
function cutAndSwap(s) {
    let cutIndex = Math.floor(s.length / 2) + s.length % 2;
    return s.slice(cutIndex) + s.slice(0, cutIndex);
}
let transformations = [
    hexFunctionMachine((n) => n * 2),
    (hex) => reverseString(simplifyHexString(hex)),
    hexFunctionMachine((n) => n / 3),
    hexFunctionMachine((n) => n / 5),
    hexFunctionMachine((n) => n + parseInt("11111111", 16)),
    hexFunctionMachine((n) => n * 3),
    hexFunctionMachine((n) => n - parseInt("22222222", 16)),
    (hex) => peelString(simplifyHexString(hex)),
    (hex) => cutAndSwap(simplifyHexString(hex)),
    hexFunctionMachine((n) => parseInt("FFFFFFFF", 16) - n),
    hexFunctionMachine((n) => Math.sqrt(n)),
    hexFunctionMachine((n) => n + parseInt("12345678", 16)),
];
function passwordGuessOverlap(password, guess) {
    /**
     * Computes and returns the strings to display correctly
     * guessed letters in a given password.
     */
    let result = "";
    let remainder = "";
    let limit = (guess.length < 8) ? guess.length : 8;
    for (let i = 0; i < limit; i++) {
        if (password[i] === guess[i]) {
            result += password[i];
        }
        else {
            result += "•";
        }
    }
    if (guess.length < 8) {
        remainder += "•".repeat(8 - guess.length);
    }
    return [result, remainder];
}
function displayResults(guess) {
    /**
     * Takes the response element and a guessed number (in string form) and
     * updates the element to display and whether there was an exact match.
     */
    let hline = "+" + "-".repeat(4) + "+" + "-".repeat(errorColWidth) + "+" + "-".repeat(8) + "+<br>";
    response.innerHTML += "Results for " + guess + "<br>" + hline + "|" + "\xa0".repeat(4) + "|" + " Errors/Warnings" + "\xa0".repeat(errorColWidth - 16) + "| Result |<br>" + hline;
    for (let i = 0; i < passwords.length; i++) {
        response.innerHTML += "| " + (i + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " |";
        try {
            let transformed = transformations[i](guess);
            console.log(i + 1, transformed);
            if (transformed.length != 8) {
                let message = " WARNING: Result has length " + transformed.length.toString(16).toUpperCase() + ".";
                response.innerHTML += message + "\xa0".repeat(errorColWidth - message.length) + "|";
            }
            else {
                response.innerHTML += " No errors or warnings :)" + "\xa0".repeat(errorColWidth - 25) + "|";
            }
            let [overlap, remainder] = passwordGuessOverlap(passwords[i], transformed);
            if (!overlap.includes("•") && remainder === "") {
                response.innerHTML += "<b><u style='color: green;'>" + overlap + '</u></b>';
            }
            else {
                response.innerHTML += "<b><u style='color: orange;'>" + overlap + '</u></b>';
                response.innerHTML += remainder;
            }
        }
        catch (error) {
            let m = error.message;
            response.innerHTML += m + "\xa0".repeat(errorColWidth - m.length) + "|<span style='color: darkred;'>" + "█".repeat(8) + "</span>";
        }
        response.innerHTML += "|<br>" + hline;
    }
}
function processGuess() {
    /**
     * This function is called every time a number is guessed.
     */
    let guess = inputBox.value;
    guess = guess.toUpperCase();
    response.textContent = "";
    response.style.color = "cadetblue";
    if (!guess) {
        response.innerText = defaultMessage;
    }
    else if (guess.match('(^([A-F]|[0-9])+$)')) {
        displayResults(guess);
    }
    else {
        response.innerText = guess + " isn't recognized as a number. Please ensure that there are no punctuation symbols or other irrelevant characters in your entry.";
    }
    // inputBox.value = '' // This clears the input field upon completion.
}
