//! ===============================================
//! basic recursive sort
function recursiveSort(arr) {
    // if array length is 1 or less, return
    if (arr.length <= 1) return arr;

    // find and remove the largest value in the array
    let maxIdx = 0;
    for (let i = 0; i < arr.length; i++) {

        if(arr[i] > arr[maxIdx]) maxIdx = i;
    }

    const maxVal = arr[maxIdx];
    arr.splice(maxIdx, 1);

    // sort the remaining elements
    arr = recursiveSort(arr);

    // put the largest value back at the end of the array
    arr.push(maxVal);

    return arr;
}

let arr = [3, 0, 2, 4, 1];
// console.log(recursiveSort([3, 2, 0, 4, 1]));

//! ===============================================
//! Zeroes to the right

function moveZeroes(nums) {
    // Create a pointer called `firstZero` that points to the left-most
    // zero n the array.
    let firstZero = -1;
    // Starts as -1 because there are no zeroes encountered yet

    // Iterate through the array.
    for (let i = 0; i < nums.length; i++) {
        // If `firstZero` has not been set, continue on until you reach a zero
        if (firstZero === -1) {

            // When you reach the first zero, set `firstZero` to the current index
            if (nums[i] === 0) firstZero = i;
        }

        // When you reach a non-zero value
        else if (nums[i] !== 0) {
            // swap it's position with `firstZero`
            [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];
            // and increment `firstZero`
            firstZero++;
        }
    }

    return nums;
}
let nums = [0, 1, 0, 4, 15];
console.log(moveZeroes(nums));

//! ===============================================
//! 