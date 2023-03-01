let hexes = [
    'FD0',
    'C0F1DE',
    'ABD1CAE',
    'DCADE',
    '51',
    'C0FFE',
    'BED1DE',
    '500',
    'AFF0D',
    'D15E5E',
    'DEBAED',
    'BA5D'
]
let answers = hexes.map(h => parseInt(h, 16)).sort((n1, n2) => n1 - n2)
console.log(answers)

let container = document.getElementById('response-container') as HTMLElement
let inputBox = document.getElementById('guess') as HTMLInputElement

let response = document.createElement('a')
let defaultMessage = "Type a number and press Enter to make a guess."
response.innerText = defaultMessage
container.appendChild(response)

function guessResults(guess: string): string {
    let guessVal = parseInt(guess, 16)
    let hline = "+" + "-".repeat(4) + "+" + "-".repeat(14) + "+\n"
    let table = "Results for " + guess + "\n" + hline
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i]
        let row = "| " + (i + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " |"
        if (guessVal < answer) {
            row += " too small" + "\xa0".repeat(4)
        } else if (guessVal == answer) {
            row += " just right!" + "\xa0".repeat(2)
        } else {
            row += " too big" + "\xa0".repeat(6)
        }
        row += "|\n"
        table += row + hline
    }
    return table
}

function processGuess() {
    let guess = inputBox.value
    guess = guess.toUpperCase()
    // console.log('Guess:' + guess)
    if (!guess) {
        response.innerText = defaultMessage
    } else if (guess.match('(^([A-F]|[0-9])+$)')) {
        response.innerText = guessResults(guess)
    } else {
        response.innerText = guess + " isn't a number I recognize."
    }
    // inputBox.value = '' // This clears the input field upon completion.
}