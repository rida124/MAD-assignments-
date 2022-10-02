// JavaScript source code
function sumOfEvenDigits(number) {
    let myFunc = num => Number(num);

    var intArr = Array.from(String(number), myFunc).filter(number => {
        return number % 2 === 0;
    });

    let sum = intArr.reduce((Sum, a) => Sum + a, 0);
    console.log("The sum of Even Digits :" + sum);
}
