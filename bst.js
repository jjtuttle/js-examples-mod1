//! BST - Binary Search Tree

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val, root = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }
        // is the val < or > the node to the parent
        if (val < root.val) { // must be less than parent node so go left
            // no sub tree left
            if (!root.left) {
                root.left = new TreeNode(val);
            } else { // if there 
                this.insert(val, root.left);
            }
        } else { // must be > than parent node so go right
            // no sub tree right
            if (!root.right) {
                root.right = new TreeNode(val);
            } else { // if there 
                this.insert(val, root.right);
            }

        }
    }
}

let tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);

console.log(tree1.root);