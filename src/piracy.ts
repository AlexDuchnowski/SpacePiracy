let hexes = ['51', '500', 'face']
let answers = hexes.map(h => parseInt(h, 16))
console.log("Answer numbers:")
answers.forEach(a => console.log(a))

let container = document.getElementById('response-container') as HTMLElement
let response = document.createElement('a')
response.innerText = "Type a number and press Enter to make a guess."
container.appendChild(response)

function processGuess() {
    let guess = (document.getElementById('guess') as HTMLInputElement).value;
    // console.log('Guess:' + guess);
    if (guess) {
        response.innerText = guess;
    } else {
        response.innerText = "Type a number and press Enter to make a guess.";
    }
}