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

//! Breadth-First Traversal Queues
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
//! SUM Tree by Breadth First - queue
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
//! Recursive Call a Tree right/left search - RECURSIVE

function binaryTreeSearch(root, target) {

    // Base case: If the tree is null, return false
    if (root === null) return false;

    // If the current node's value equals the target, return true
    if (root.value === target) return true;

    // Otherwise, search the left subtree for the target
    if (binaryTreeSearch(root.left, target)) return true;

    // If the value isn't in the left subtree, try the right subtree
    return binaryTreeSearch(root.right, target);
}

//! ===============================================
//! Traversing a binary tree - SUM Up - RECURSIVE

function binaryTreeSum(root) {

    // Check the base case
    if (root === null) return 0;

    // Recursively sum up the left and right trees
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    // Return the value plus the left and right totals
    return root.value + leftSum + rightSum;
}

//! ===============================================
//! Breadth-first traversal - TRUE QUEUE CLASS USED

function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = new Queue();
    queue.enqueue(root);

    // While the queue is not empty
    while (queue.size > 0) {

        // Dequeue a node and print it
        let node = queue.dequeue();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.enqueue(node.left);
        queue.enqueue(node.right);
    }
}
//! ===============================================
//! Breadth-first traversal - ARRAY USED AS A QUEUE
function breadthFirstTraversal(root) {

    // Put the starting node in a queue
    const queue = []
    queue.push(root);

    // While the queue is not empty
    while (queue.size > 0) {

        // Dequeue a node and print it
        let node = queue.shift();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.push(node.left);
        queue.push(node.right);
    }
}

//! ===============================================
//! Depth-first traversal  - STACK QUEUE with Array

function depthFirstTraversal(root) {

    // Put the starting node on a stack
    const stack = [];
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

        // Pop a node and print it
        let node = stack.pop();
        console.log(node.value);

        // Put all of the node's children on the top of the stack
        stack.push(node.right);
        stack.push(node.left);
    }
}

//! ===============================================
//! Binary Search Tree (BST) - RECURSIVE

function searchBST(root, target) {

    if (root === null) return false;

    if (target === root.value) return true;

    if (target < root.value) return searchBST(root.left, target);

    if (target > root.value) return searchBST(root.right, target);
}

//! ===============================================
//! Binary Search Tree (BST) - ITERATIVELY

function searchBST(root, target) {

    let currentNode = root;

    while (currentNode !== null) {

        if (target === currentNode.value) return true;

        if (target < currentNode.value) currentNode = currentNode.left;

        if (target > currentNode.value) currentNode = currentNode.right;
    }

    return false;

}

//! ===============================================