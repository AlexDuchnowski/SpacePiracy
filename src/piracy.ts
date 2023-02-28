let hexes = ['51', '500', 'face']
let answers = hexes.map(h => parseInt(h, 16))
console.log("Answer numbers:")
answers.forEach(a => console.log(a))

let container = document.getElementById('response-container') as HTMLElement
let inputBox = (document.getElementById('guess') as HTMLInputElement)
let response = document.createElement('a')
let defaultMessage = "Type a number and press Enter to make a guess."
response.innerText = defaultMessage
container.appendChild(response)

function processGuess() {
    let guess = inputBox.value
    guess = guess.toUpperCase()
    // console.log('Guess:' + guess)
    if (!guess) {
        response.innerText = defaultMessage
    } else if (guess.match('(^([A-F]|[0-9])+$)')) {
        response.innerText = guess
    } else {
        response.innerText = guess + " isn't a number I recognize."
    }
    inputBox.value = ''
}