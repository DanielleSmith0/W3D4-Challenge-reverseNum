// const backwards = num => {
//     while(num){
//         let lastDigit = num % 10;
//         console.log(lastDigit);
//         num = (num - lastDigit)/10;
//     }
// }

// backwards(43); It works!

//Answer Walkthrough

// const printBackNum = num => {
//     num = Math.abs(num);
//     let number = 0;
//     while (num > 0) {
//         number = ((num/10) Math.floor(num/10)) * 10;
//         console.log(Math.round(number));
//         ...
//     }
// }

//OR

function printBackwards (num) {
    while(num>0){
        let decimal = num/10;
        num = Math.floor(decimal);
        let tenths = (decimal % 1) * 10;
        console.log(Math.round(tenths));
    }
}

console.log(printBackwards(435))