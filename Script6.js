// JavaScript source code
unction guessNumber() {
    let guess = Math.floor(Math.random() * 10);

    let guessedNumber = prompt("Please enter a number: ");
    if (guessedNumber == guess) {
        console.log("You Win!");
    } else {
        console.log("Not matched");
    }
}
