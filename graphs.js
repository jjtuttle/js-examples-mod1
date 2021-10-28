class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');
a.neighbors = [e, c, d];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

//! ===============================================
//! Graph Traversal w/ GraphNode -  RECURSIVELY
function depthFirst(node, visited=new Set()) {
    if(visited.has(node.val)) return;
    visited.add(node.val);
    console.log(node.val);
    node.neighbors.forEach((neighbor) => depthFirst(neighbor, visited));

}

// depthFirst(a);

//! ===============================================
//! Adjacently List of a Graph - RECURSIVELY
let graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
}

function depthFirstAdj(graph, node, visited=new Set()) {
    if(visited.has(node)) return;
    console.log(node);
    visited.add(node);
    graph[node].forEach((neighbor) => depthFirstAdj(graph, neighbor, visited));
}

// depthFi rstAdj(graph, 'a');

//! ===============================================
//! Graph Traversal w/ GraphNode - WHILE LOOP
function depthFirstIter(node) {
    let visited = new Set();
    let stack = [node];

    while (stack.length) {
        let node = stack.pop();

        // if this node has already been visited, then skip this node
        if (visited.has(node.val)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log(node.val);
        visited.add(node.val);

        // then add its neighbors to the stack to be explored 
        stack.push(...node.neighbors);
    }
}

// depthFirstIter(f); // f e a d c b 

//! ===============================================
//! Graph Traversal w/ Adjacency List - RECURSIVELY + HELPER FUNC

function depthFirst(graph) {
    let visited = new Set();

    for (let node in graph) {
        _depthFirstRecur(node, graph, visited);
    }
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return;

    console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => {
        _depthFirstRecur(neighbor, graph, visited);
    });
}

depthFirst(graph); // a b c d e f 

//! ===============================================
