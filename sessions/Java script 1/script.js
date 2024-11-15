// 0 - 9
let guessedNum = Math.floor(Math.random() * 10 + 1);
console.log("Computer picked #: " + guessedNum);

let userNum = prompt("Guess a number between 1 - 10: ");

if (userNum < guessedNum) {
    userNum = prompt('Guess Higher');
}

if (userNum > guessedNum) {
    userNum = prompt('Guess Lower');
}

if (userNum == guessedNum) {
    console.log('CONGRATS');
}

if(userNum != guessedNum){
    console.log('Failed');
}