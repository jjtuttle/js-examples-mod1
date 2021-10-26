// // sorted array
// let arr = [2, 7, 8, 9, 10, 13, 17, 19, 21];
// //        LEFT                      RIGHT
// let newArr = [];
// let target = 7;
// let mid = (0 + (arr.length - 1) / 2) // 4 <-- index 4(10)
// if (mid === target) return true;
// else { // which direction?
//     newArr = arr.slice(mid, mid - arr.length - 1); // [10,13,17,19,21] WRONG
// }
// console.log(mid);

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
    if(left > right) return false; // have not found target

    
        let mid = Math.floor((left + right) / 2); // get mid
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

    return binarySearchHelper(arr, target, 0, arr.length - 1 );
}

console.log(binarySearch(arr, 7)); // 1
console.log(binarySearch(arr, 15)); // false
