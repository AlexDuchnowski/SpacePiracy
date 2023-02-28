let answers: number[] = [51, 500, parseInt('face', 16)]
console.log("Answer numbers:")
answers.forEach(a => console.log(a))

function processGuess() {
    let guess = (document.getElementById('guess') as HTMLInputElement).value;
    console.log('Guess:' + guess);
}