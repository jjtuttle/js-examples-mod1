// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return merged;
    // Divide the array in half
    let midIdx = Math.floor(arr.length / 2);
    // Recursively sort the left half
    let leftHalf = array.slice(0, midIdx); // split into two
    let sortedLeft = mergeSort(leftHalf)
    // Recursively sort the right half
    let rightHalf = array.slice(midIdx);
    let sortedRight = mergeSort(rightHalf);
    mergeSort(arr)
    // Merge the halves together and return
    return merge(sortedLeft, sortedRight); // call helper Func toe merge the two sorted halves
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

    // Create an empty return array
    let merged = [];
    // Point to the first value of each array

    // While there are still values in each array...
    //.. if array1 is nonempty, take its the first element as ele1 otherwise
    //.. array1 is empty, so take Infinity as ele1
    while (arrA.length || arrB.length) {
        let ele1 = arrA.length ? arrA[0] : Infinity; // leftSorted array
        let ele2 = arrB.length ? arrB[0] : Infinity; // rightSorted array
        let next;

        if (ele1 < ele2) {
            // Compare the first values of each array
            // Add the smaller value to the return array
            // Move the pointer to the next value in that array
            next = arrA.shift();
        } else {
            next = arrB.shift();
        }
        merged.push(next);
    }
    // Return the return array
    return merged;
}


const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

console.log(merge(arr1, arr2));


module.exports = [merge, mergeSort];