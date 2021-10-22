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
//! cache Fibonacci sequence
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
//console.log(fibMemoPrint(26));
//! ===============================================
//!  Hash Table takes 3 things to make it work
//! 1.  create a hash table class
//! 2.  add a hash function
//! 3.  implement a method for adding key/value pairs to our table
//! ===============================================

class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);

        if (this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}

const ht = new HashTable();
// console.log(ht.set("Canada", 300));
// console.log(ht.set("France", 100));
// console.log(ht.set("Spain", 110));

console.log(hashTable)
console.log(hashTable.data)
console.log(hashTable.data[0])

//! ===============================================
//! 
