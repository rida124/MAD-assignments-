// JavaScript source code
unction checkForTenInArray(array){

    if (array.length < 2) {
        console.log("Invalid array length");
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i == 0 && array[i] == 10) {
                console.log("10 found at first position");
                break;
            } else if (i == array.length - 1 && array[i] == 10) {
                console.log("10 found at last position");

            } else {
                continue;
            }
        }
    }
}
