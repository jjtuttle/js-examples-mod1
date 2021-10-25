 
q = new Queue();
n = 100000

enqueueStartTime = Date.now();
for (let i = 0; i < n; i++) {
    q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0; i < n; i++) {
    q.dequeue();
}
dequeueEndTime = Date.now();

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);
//! ===============================================
// // singly linked list reverse 
// function listNodeReverse(list) {
//     prev = null;
//     curr = head;
//     next = null;

//     while(curr !== null) {
//         next = curr.next;  //save next
//         curr.next = prev;  // reverse
//         prev = curr;       // advance prev
//         curr = next;       // advance curr
//     }
//     return prev;
// }















//! ===============================================


class ChangeSorter {
    constructor(maxNums) {
        // = [];
        this.numList = new LinkedList();

        // = [];
        this.allowedNums = new Set();

        this.maxNums = maxNums;
    }

    addAllowedNum(num) {
        if (!this.allowedNums.has(num)) { 
            this.allowedNums.add(num);
            return `${num} added to allowedNums`;
        } else {
            return `${num} already in allowedNums`;
        }
    }

    numCount() {

        return this.numList.length; 
    }

    isNumAllowed(num) {
        return this.allowedNums.has(num); 
    }

    buildNumList(amount) {
        this.numList = new LinkedList();         
        for (let i = 0; i <= amount; i++) {
            if (this.isNumAllowed(i)) {
                this.numList.enqueue(i);
                console.log(`${i} added to numList`);
            } else {
                console.log(`${i} is not an allowed number`);
            }
        }
        return this.numCount();
    }

    getFirstNum() {
        if (this.numList.length > 0) {

            return this.numList.dequeue();
        } else {
            return undefined;
        }
    }
 
    addNumToBack(num) {

        if (this.isNumAllowed(num)) this.numList.enqueue(num);
        return this.numList.dequeue();  
    }
}