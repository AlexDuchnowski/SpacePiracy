"use strict";
let answers = [51, 500, parseInt('face', 16)];
console.log("Answer numbers:");
answers.forEach(a => console.log(a));
function processGuess() {
    let guess = document.getElementById('guess').value;
    console.log('Guess:' + guess);
}
// let input = document.createElement('input')
// input.type = 'text'
// let submit = document.createElement('input')
// submit.type = 'submit'
// // submit.onsubmit = processGuess()
// let terminal = document.getElementById('terminal')
// terminal!.appendChild(input)
// terminal!.appendChild(submit)
