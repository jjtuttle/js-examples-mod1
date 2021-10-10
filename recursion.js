//! factorial
const factorial = function (n) {
    if (n === 0) return 1;
    if (n < 0) return null;

    return n * factorial(n - 1);
};
// console.log(factorial(5));

//! ===============================================
//! Sum() with Array
const sum = function (array) {
    if (!array.length) return 0;
    //if()

    return array[0] + sum(array.slice(1));
};
console.log(sum([1, 2, 3, 4, 5, 6]));

//! ===============================================
