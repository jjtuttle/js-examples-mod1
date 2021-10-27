class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

//       a
//     /  \
//    b    c
//   / \    \
//  d   e    f

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//! Breadth-First Traversal
//.. a,b,c,d,e,f is the breadth in this one (width)

// TC: O(n)
// SC: O(n) 
const bfs = (root, target) => {
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        //console.log(curr.val);

        if (curr.val === target) {
            return true;
        }

        if (curr.left !== null) {
            queue.push(curr.left);
        }
        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }
    return false;
};

// console.log(bfs(a, "e")); // true
// console.log(bfs(a, "z")); // false

//breadthFirstPrint(a);
//! ===============================================
//! SUM Tree
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//     /  \
//    2    7
//   / \    \
//  4   -2    5

const sumTree = (root) => {
    const queue = [root];
    let sum = 0;
    while (queue.length > 0) {
        const curr = queue.shift();
        sum += curr.val;

        if (curr.left !== null) {
            queue.push(curr.left);
        }
        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }
    return sum;
};

console.log(sumTree(a)); // 19
//! ===============================================
//! Recursive Call a Tree

function linkedListSearch(linkedList, target) {

    // Base case: empty list
    if (linkedList.head === null) return false;

    // Check if the current node's value matches the target
    if (linkedList.head.value === target) return true;

    // If not, recursively search the rest of the list
    return linkedListSearch(linkedList.head.next);
}

//! ===============================================