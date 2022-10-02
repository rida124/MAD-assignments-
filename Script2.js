// JavaScript source code
function sumOfDigits(number) {
    let myFunc = num => Number(num);

    var intArr = Array.from(String(number), myFunc);
    let sum = intArr.reduce((Sum, a) => Sum + a, 0);
    console.log("The Sum is " + sum);


}
