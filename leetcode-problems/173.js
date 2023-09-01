class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BSTIterator {
    constructor(root) {
        this.stack = [];
        this.#leftmostInorder(root);
    }

    #leftmostInorder(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        if (this.hasNext()) {
            const node = this.stack.pop();
            this.#leftmostInorder(node.right);
            return node.val;
        }
    }

    hasNext() {
        return this.stack.length > 0;
    }
}

// Create a binary search tree
const root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

// Create an iterator for the BST
const iterator = new BSTIterator(root);

// Iterate through the BST using the iterator
while (iterator.hasNext()) {
    console.log(iterator.next());
}