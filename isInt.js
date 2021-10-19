
function isInt(n) {
    if(n % 1 === 0) return true;

    if(n % 1!== 0) return false;
}

function countToZero(n) {
    // positive non integer
    if (n > 0 && !isInt(n)) {
        console.log(n);

        let nextN = n - n % 1;
        countToZero(nextN);
    }
    // if negative non integer
    if (n < 0 && !isInt(n)) {
        console.log(n);

        let nextN = n + -(n % 1);
        countToZero(nextN);
    }
    // if positive integer
    if (n > 0 && isInt(n)){
        console.log(n);

        let nextN = n - 1;
        countToZero(nextN);
    }
    // if negative integer 
    if (n < 0 && isInt(n)) {
        console.log(n);

        let nextN = n + 1
        countToZero(nextN);
    }
    // if zero
    if(n === 0) {
        console.log(0);
    }
}

console.log(countToZero(3.5));