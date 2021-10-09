//* Using the every() method 

// With a for()
let numbers = [1, 3, 5];

let forLoop = num => {
    let result = true;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0) {
            result = false;
            break;
        }
    }
    return result;
}
//? console.log(forLoop(numbers));

//! every() method way

let everyMethod = num => {
    let result = num.every(function (ele) {
        return ele > 0
    });
    return result;
};
// console.log(everyMethod(numbers));

//! ES6 Fat Arrow
let fatEvery = numbers.every( ele => ele > 0);

//console.log(fatEvery);

//! even numbers with  every()
let isOdd = numbers.every( ele => ele % 2 !== 0);

console.log(isOdd);