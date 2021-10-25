//! non recursion
function bubbleSort(arr) {
  let swap = true;

  while (swap) {
    swap = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;

        console.log(arr.join(","));
      }
    }
    if (!swap) {
      return arr;
    }
  }
  return arr;
}
//! ===============================================
//! recursion
/**
 *   let swap = false; // true?
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current value is greater than its neighbor to the right
    // Swap those values
    if (arr[i] > arr[i + 1]) {
      let tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
      swap = true;
    }

  }
  // Do not move this console.log
  console.log(arr.join(","));

  // If you get to the end of the array and no swaps have occurred, return
  if (swap) {
    return bubbleSort(arr);
  } else {

  }
  // Otherwise, repeat from the beginning
  return arr;
 */

module.exports = bubbleSort;