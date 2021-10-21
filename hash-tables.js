//! simple hash
function simpleHash(str) {
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
        const val = str[i];
        hashValue += str.charCodeAt(val);
    }
    return hashValue;
}

//? console.log(simpleHash('james'));

//! ===============================================
//! Hash Table Data Storage
data = [null, null, null, null, null, null, null, null]

function hash(str) {
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
    }

    return hashValue;
}
// - 
function hashMod(key) {
    return hash(key) % data.length; // data.length is the Array declared above
}
// - 
// console.log(hash("key"));            // 329
// console.log(hashMod("key"));         // 1
// console.log(hash('james'));          // 528
// console.log(hashMod('james'));       // 0
//! ===============================================
cache = {};

function fibMemoPrint(n) {
    console.log(`Running fibMemoPrint(${n})`);
    console.log(cache);
    if (n === 1) return 0;
    if (n === 2) return 1;

    if (cache[n] === undefined) {
        cache[n] = fibMemoPrint(n - 1) + fibMemoPrint(n - 2);
    }

    return cache[n];
}