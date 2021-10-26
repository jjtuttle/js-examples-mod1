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
// console.log(moveZeroes(nums));

//! ===============================================
//! Even/Odd sort

function evenOddSort(nums) {
    // Create two empty arrays: evens and odds
    const evens = [];
    const odds = [];
    // Repeat 2 through 4 until the input array is empty
    while (nums.length > 0) {
        // Find the smallest even and odd values in the array
        let smallestEven = Infinity;
        let smallestOdd = Infinity;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {  // even
                if (nums[i] < smallestEven) {
                    smallestEven = nums[i];
                }
            } else if (nums[i] % 2 === 1) {  // odd
                if (nums[i] < smallestOdd) {
                    smallestOdd = nums[i];
                }
            }
        }
        // Add these to the end of the even and odd arrays
        if (smallestEven !== Infinity) {
            evens.push(smallestEven);
            // Remove the smallest even value from the array
            let smallestEvenIndex = nums.indexOf(smallestEven);
            nums.splice(smallestEvenIndex, 1);
        }
        if (smallestOdd !== Infinity) {
            odds.push(smallestOdd);
            // Remove the smallest odd value from the array
            let smallestOddIndex = nums.indexOf(smallestOdd);
            nums.splice(smallestOddIndex, 1);
        }
    }

    // Join the even and odd arrays and return
    return [...evens, ...odds];
}

// console.log(evenOddSort([0, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6]));
//! ===============================================
//! Javascript BUilt in Sort()
//.. sorts numbers alpha, turns into Strings
nums = [3, 2, 0, 4, 1];
nums.sort();
// console.log(nums);  // [0, 1, 2, 3, 4]
//! -------------------------------------

//* With larger numbers use custom define a custom sorting predicate
nums2 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
nums2.sort();
// console.log(nums2); // [1024, 128, 16, 2, 256, 32, 4, 512, 64, 8] ?????
//! -------------------------------------
//.. Custom Sorting Predicate
function compareNumbers(a, b) {
    return a - b;
}
nums3 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
// console.log(nums3.sort(compareNumbers));

//! ===============================================
//!  Using JS sort even # on right odd # on left

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function oddEvenCompare(a, b) {
    if (a % 2 === 1 && b % 2 === 0) return 1;
    if (a % 2 === 0 && b % 2 === 1) return -1;
    return a - b;
}
// console.log(nums.sort(oddEvenCompare));

//! ===============================================
//! Sort 0's to the Right

nums = [0, 1, 0, 4, 15];

function moveZeroesCompare(a, b) {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return a - b;
}
console.log(nums.sort(moveZeroesCompare));
//! ===============================================