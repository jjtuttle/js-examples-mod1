//! ===============================================
//! 


//! recursive sort
const nameSorter = (namesArr, sorted = []) => {
    if (!namesArr.length) return sorted;

    const lowest = namesArr.reduce((accum, ele) => {
        if (accum < ele) return accum;
        return ele;
    });

    sorted.push(lowest);

    namesArr.splice(namesArr.indexOf(lowest), 1);

    return nameSorter(namesArr, sorted);
}

const javascript = [
    'kick',
    'toUpperCase',
    'Loop',
    'Destructure',
    'Recursion',
    'Splice',
    'Split',
    'Map',
    'Reduce',
    'Reverse',
]
const javascriptSorted = nameSorter(javascript)
// console.log(javascriptSorted);

//! ===============================================

function sort(nums) {
    if (!nums.length) return [];

    let ele = Math.min(...nums);
    nums.splice(nums.indexOf(ele), 1);

    return [ele].concat(sort(nums));
}

// console.log(sort([])) // prints []
// console.log(sort([9])) // prints [9]
// console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
// console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
//! ===============================================

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function oddEvenCompare(a, b) {
    if (a % 2 === 1 && b % 2 === 0) return 1;
    if (a % 2 === 0 && b % 2 === 1) return -1;
    return a - b;
}
console.log(nums.sort(oddEvenCompare));