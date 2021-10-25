// Insertion Sort out-of-place
// Do not modify the original array

//.. arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];

function insertionSort(arr) {
  /*
  Pseudocode:
  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */
  const arrCopy = [...arr];
  const sorted = [];
  while (arrCopy.length > 0) {
    console.log(sorted.join(','));
    let val = arrCopy.pop();
    sorted.push(null);
    let i = sorted.length - 1;
    while (i > 0) {
      if (sorted[i - 1] < val) {
        break;
      } else {
        sorted[i] = sorted[i - 1];
        i--;
      }
    }
    sorted[i] = val;
  }
  return sorted;
}
arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
// console.log(insertionSort(arr));
/** 
Pseudocode:
  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
- make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
    - For each value starting from the divider,
      - Check if the value to the left is smaller than the unsorted value
        - If so, you've reached the insertion point so exit the loop
          - If not shift the value to the right by 1 and continue
- Insert the unsorted value at the break point
- Increment the dividing pointer and repeat
  Return the mutated array
  */
function insertionSortInPlace(arr) {
  let divider = 1;
  while (divider < arr.length) {
    console.log(arr.join(','));
    let val = arr[divider];

    let i = divider;
    while (i > 0) {
      if (arr[i - 1] < val) {
        break;
      } else {
        arr[i] = arr[i - 1];
        i--;
      }
    }
    arr[i] = val;
    divider++;
  }
  return arr;
}

console.log(insertionSortInPlace(arr));
module.exports = [insertionSort, insertionSortInPlace];