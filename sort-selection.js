const { sort } = require("./insertion-sort");

const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];

function selectionSort(arr) {

    // Copy the original array
    const arrCopy = [...arr];
    // Create an array to store the sorted values
    const sorted = [];
    // While the array is not empty...
    while (arrCopy > 0) {
        // Do not move this console.log
        console.log(sorted.join(","));

        // Find the index of the minimum value in the unsorted half
        let minIdx = 0;
        for (let i = 1; i < arrCopy.length; i++) {
            if (arrCopy[i] < arrCopy[minIdx]) {
                minIdx = i;
            }
        }
        // Save and remove the value at the min index
        let minVal = arrCopy.splice(minIdx, 1)[0];
        sort.push(minVal);
    }
    // Add the min value to the end of the sorted array
    return sorted;
}



//console.log(selectionSort(arr));


function selectionSortInPlace(arr) {

    // Set a pointer at zero diving the array into sorted and unsorted halves
    let divider = 0;
    // Repeat while the unsorted half is not empty:
    while (divider < arr.length) {
        // Do not move this console.log
        console.log(arr.join(","));

        // Find the index of the minimum value in the unsorted half
        let minIdx = divider;
        for (let i = divider + 1; i < arr.length; i++) {
            if (arr[i] < arr[minIdx]) {
                minIdx = i;
            }
        }
        // Save the min value
        let minVal = arr[minIdx];
        // Shift every unsorted value to the left of the min value to the right by 1
        for (let i = minIdx; i >= divider; i--) {
            arr[i] = arr[i - 1];
        }
        // Put the min value at the divider
        arr[divider] = minVal;
        divider++;
    }
    return arr;
}
console.log(selectionSortInPlace(arr));


module.exports = [selectionSort, selectionSortInPlace];