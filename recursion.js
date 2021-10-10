//! factorial
const factorial = function (n) {
    if (n === 0) return 1;
    if (n < 0) return null;

    return n * factorial(n - 1);
};
// console.log(factorial(5));

//! ===============================================
