//! ===============================================
//! Linear Binary Search
function linearSearch(arr, target) {

    return arr.indexOf(target);
};

console.log(linearSearch([2, 4, 6, 8], 6));  // 2
console.log(linearSearch([2, 4, 6, 8], 10));  // -1

//! ===============================================

function binarySearch(arr, target) {
    // Set integers pointing to the high and low range of possible indices
    let left = 0;
    let right = arr.length - 1;
    // While high and low indices do not overlap...
    while (left <= right) {
        // Find the midpoint between high and low indices
        let mid = Math.floor((left + right) / 2);
        // Compare the target value to the midpoint value
        if (target === arr[mid]) {
            // If the target equals the midpoint...
            // Return the midpoint index
            return mid;
        } else if (target > arr[mid]) {
            // If the target is higher than the midpoint...
            // Move the low pointer to midpoint + 1
            left = mid + 1;
        } else {
            // If the target is less than the midpoint...
            // Move the high pointer to midpoint - 1
            right = mid - 1;
        }
    }
    // Return -1 if the loop exits with overlapping pointers
    return -1;
}

console.log(binarySearch([2, 4, 6, 8], 6));  // 2
console.log(binarySearch([2, 4, 6, 8], 10));  // -1

//! ===============================================
/** 
// sorted array
let arr = [2, 7, 8, 9, 10, 13, 17, 19, 21];
//        LEFT                      RIGHT
let newArr = [];
let target = 7;
let mid = (0 + (arr.length - 1) / 2) // 4 <-- index 4(10)
if (mid === target) return true;
else { // which direction?
    newArr = arr.slice(mid, mid - arr.length - 1); // [10,13,17,19,21] WRONG
}
console.log(mid);
*/
//! ===============================================
//! Binary Search Normal
let arr = [2, 7, 8, 9, 10, 13, 17, 19, 21];

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) { // keep searching as long an element is left
        let mid = Math.floor((left + right) / 2); // get mid
        if (target === arr[mid]) { // found it - return index
            return mid;
        } else if (target < arr[mid]) { // target is < arr[mid]
            right = mid - 1; // no need to check right side 
        } else { // target is > arr[mid]
            left = mid + 1; // move to the right
        }
    }
    return false;
}

// TC: O(log(n))
// SC: O(1) - no new arrays
// console.log(binarySearch(arr, 7)); // 1
// console.log(binarySearch(arr, 15)); // false

//! ===============================================
//! Binary Search Recursive
//.. HELPER FUNCTION .........................

function binarySearchHelper(arr, target, left, right) {
    if (left > right) return false; // have not found target

    let mid = Math.floor((left + right) / 2); // get mid index

    if (target === arr[mid]) { // found it - return index
        return mid;
    } else if (target < arr[mid]) { // target is < arr[mid]
        return binarySearchHelper(arr, target, left, mid - 1) // ignore right
    } else { // target is > arr[mid]
        return binarySearchHelper(arr, target, mid + 1, right) // ignore left
    }

    return false;
}
//.. RECURSIVE FUNCTION .........................
function binarySearch(arr, target) {

    return binarySearchHelper(arr, target, 0, arr.length - 1);
}
// TC: O(logn)
// SC: O(logn)

console.log(binarySearch(arr, 7)); // 1
console.log(binarySearch(arr, 15)); // false
