function quicksort(arr) {

    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr;

    // Pick the first value as the pivot
    let pivot = arr[0];
    // Orient the pivot so that...
    // every number smaller than the pivot is to the left
    let left = arr.filter((el) => el < pivot);
    // every number larger (or equal) than the pivot is to the right
    let right = arr.filter((el) => el > pivot);

    // Recursively sort the left
    let leftSorted = quicksort(left);
    // Recursively sort the right
    let rightSorted = quicksort(right);
    // Return the left, pivot and right in sorted order
    return [...leftSorted, pivot, ...rightSorted];

}

let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log(quicksort(arr));

module.exports = [quicksort];