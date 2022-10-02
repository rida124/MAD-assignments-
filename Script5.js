// part 1
function reverseString(str) {
    
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
}
// part 2

function digitInReverseOrder(number) {
    var reverse = parseInt(String(number).split('').reverse().join('') * Math.sign(number));
    console.log(reverse);
}
