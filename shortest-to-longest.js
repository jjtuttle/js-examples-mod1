/***********************************************************************
Write a recursive function called `shortestToLongest` which takes
an array of lowercase strings and returns them sorted from shortest
to longest.

Strings of equal length should be sorted alphabetically.

(Hint: str1 < str2 will return true if str1 comes before str2
alphabetically)

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the shortest string in the `strings` array to the end of `sorted`.

  //? 1. Find the shortest string in the `strings` array

  //? 2. Remove the shortest string from the `strings` array

  //? 3. Push the shortest string to the back of the `sorted` array

  //? 4. Recurse until the `strings` array is empty (base case)

***********************************************************************/

// function shortestToLongest(strings, sorted = []) {
//     if (!strings.length) {
//         return sorted;
//     }

//     const lowest = strings.reduce((preVal, currVal) => {
//         if (preVal.length < currVal.length) {
//             if (preVal < currVal) return preVal;
//         } else {
//             return currVal;
//         }
//     });

//     sorted.push(lowest);

//     strings.splice(strings.indexOf(lowest), 1);

//     return shortestToLongest(strings, sorted);
// }
function shortestToLongest(strings, sorted = []) {
    if (!strings.length) {
        return sorted;
    }

    const lowest = strings.reduce(function (preVal, currVal) {
        if (preVal.length <= currVal.length) {
            if (preVal < currVal) {
                return preVal
            };
        } return currVal
    });

    sorted.push(lowest);

    strings.splice(strings.indexOf(lowest), 1);

    return shortestToLongest(strings, sorted);
}

// Examples:

// Sorts strings from shortest to longest
let strings1 = ["abc", "de", "", "f", "ghijk", "lmno"]
console.log(shortestToLongest(strings1));
// ['', 'f', 'de', 'abc', 'lmno', 'ghijk']


// Accepts a pre-sorted default parameter
let strings2 = ["pomegranate", "persimmon", "peach"];
let sorted = ["pea", "pear"];
console.log(shortestToLongest(strings2, sorted));
// ['pea', 'pear', 'peach', 'persimmon', 'pomegranate']


// Sorts strings of the same length alphabetically
let strings3 = ["dog", "cat", "elephant", "ant", "pig", "emu"];
console.log(shortestToLongest(strings3));
// ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = shortestToLongest;
} catch {
    module.exports = null;
}



// let str1 = strings[0];
// for (let i = 1; i < strings.length; i++) { // iterate through strings to find shortest 
//   //if(strings[i] < strings[shortestIdx]){
//   let str2 = strings[i];
//   console.log('str1: ' + str1 + ' ' + 'str2: ' + str2);
//   if (str1 < str2) {
//     shortest = str1; // set i = shortest
//     shortIdx = str1[i];
//   }
// }
// sorted.push(strings[shortIdx]); // push() found shortest so far into sorted array
// strings.splice(shortIdx, 1); // delete the shortest one form strings array


// return shortestToLongest(strings, sorted);