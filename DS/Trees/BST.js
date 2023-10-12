import Stack from '../Stack/Stack.js'
import Queue from '../Queue/Queue.js'

export class Node {
    constructor(val, left = null, right = null) {
        this.left = left
        this.right = right
        this.data = val
    }
}

export class BST {
    #root

    getRoot() {
        return this.#root
    }
    constructor(node) {
        this.#root = node ?? null
        this.size = 0
    }

    insert(val) {
        const node = new Node(val)
        this.#root = this.#insertHelper(this.#root, node)
        this.size++

        return node
    }

    delete(key) {
        this.#deleteHelper(this.#root, key)
    }

    searchIterative(target) {
        return this.#searchIterativeHelper(this.#root, target)
    }

    searchRec(target) {
        return this.#searchRecHelper(this.#root, target)
    }

    #insertHelper(root, node) {
        if (!root) {
            return node
        }

        if (node.data < root.data) {
            root.left = this.#insertHelper(root.left, node)
        } else {
            root.right = this.#insertHelper(root.right, node)
        }

        return root
    }

    #deleteHelper(root, key) {
        if (!root) return root

        if (key < root.data) {
            root.left = this.#deleteHelper(root.left, key)
        } else if (key > root.data) {
            root.right = this.#deleteHelper(root.right, key)
        } else {
            if (!root.left) {
                return root.right
            } else if (!root.right) return root.left

            const tmpNode = this.#getMin(root.right)
            root.data = tmpNode.data
            root.right = this.#deleteHelper(root.right, tmpNode.data)
        }

        return root
    }

    #searchIterativeHelper(node, target) {
        while (node && node.data !== target) {
            if (node.data < target) {
                node = node.right
            } else {
                node = node.left
            }
        }

        return !!node
    }

    #searchRecHelper(root, target) {
        if (!root) return false

        if (root.data === target) {
            return true
        }

        if (root.data > target) {
            return this.#searchRecHelper(root.left, target)
        } else {
            return this.#searchRecHelper(root.right, target)
        }
    }

    #getMin(node) {
        if (!node) {
            return null
        }
        let curr = node
        while (curr.left) {
            curr = curr.left
        }
        return curr
    }

    #getMax(node) {
        if (!node) {
            return null
        }
        let curr = node
        while (curr.right) {
            curr = curr.right
        }
        return curr
    }

    #getHeight(node) {
        if (!node) {
            return -1
        }
        return Math.max(this.#getHeight(node.left), this.#getHeight(node.right)) + 1
    }

    getPredecessor(node) {
        if (!node) return null

        if (node.left) {
            return this.#getMax(node.left)
        } else {
            let predecessor = null
            let ancestor = this.#root

            while (ancestor !== node) {
                if (ancestor.data < node.data) {
                    predecessor = ancestor
                    ancestor = ancestor.right
                } else {
                    ancestor = ancestor.left
                }
            }

            return predecessor
        }
    }

    getSuccessor(node) {
        if (!node) return null

        if (node.right) {
            return this.#getMin(node.right)
        } else {
            let successor = null
            let ancestor = this.#root

            while (ancestor !== node) {
                if (ancestor.data >= node.data) {
                    successor = ancestor
                    ancestor = ancestor.left
                } else {
                    ancestor = ancestor.right
                }
            }

            return successor
        }
    }

    preOrderTraverse() {
        return this.#preOrderTraverseHelper(this.#root)
    } 

    inOrderTraverse() {
        return this.#inOrderTraverseHelper(this.#root)
    }

    postOrderTraverse() {
        return this.#postOrderTraverseHelper()
    }

    levelOrderTraverse() {
        return this.#levelOrderTraverseHelper(this.#root)
    }

    levelOrderTraverseRec() {
        return this.#levelOrderTraverseRecHelper(this.#root)
    }

    #preOrderTraverseHelper(node) {
        if (!node) {
            return null
        }
        const stack = new Stack()
        const arr = []
        stack.push(node)

        while (!stack.isEmpty()) {
            const curr = stack.pop()
            arr.push(curr.data)

            if (curr.right) {
                stack.push(curr.right)
            }
            if (curr.left) {
                stack.push(curr.left)
            }
        }

        return arr
    }

    #inOrderTraverseHelper(node) {
        if (!node) {
            return null
        }
        const stack = new Stack()
        const arr = []
        let curr = node

        while (!stack.isEmpty() || curr) {
            if (curr) {
                stack.push(curr)
                curr = curr.left
            } else {
                curr = stack.pop()
                arr.push(curr.data)
                curr = curr.right
            }
        }

        return arr
    }

    #postOrderTraverseHelper(node) {
        if (!node) {
            return null
        }

        const stack = new Stack()
        const tmpStack = new Stack()

        stack.push(node)

        while (!stack.isEmpty()) {
            let curr = stack.pop()
            tmpStack.push(curr.data)

            if (curr.left) {
                stack.push(curr.left)
            }
            if (curr.right) {
                stack.push(curr.right)
            }
        }

        const arr = []
        while (!tmpStack.isEmpty()) {
            arr.push(tmpStack.pop())
        }

        return arr
    }

    #levelOrderTraverseHelper(node) {
        const queue = new Queue()
        const res = []
        queue.push(node)

        while (!queue.isEmpty()) {
            const qs = queue.size()
            let levelRes = []

            for (let i = 0; i < qs; i++) {
                const curr = queue.pop()
                levelRes.push(curr.data)

                if (curr.left) {
                    queue.push(curr.left)
                }

                if (curr.right) {
                    queue.push(curr.right)
                }
            }
            res.push(levelRes)
        }

        return res
    }

    #levelOrderTraverseRecHelper(node) {
        const res = []
        traverseNode(node, 0)

        function traverseNode(node, level) {
            if (!node) return null
            if (!res[level]) {
                res.push([])
            }

            res[level].push(node.data)
            traverseNode(node.left, level + 1)
            traverseNode(node.right, level + 1)
        }

        return res
    }

    traverseRec(node, order) {
        return this.#traverseRec(node, order, [])
    }

    #traverseRec(node, order, arr) {
        if (!node) return arr;

        if (order === 'pre') {
            arr.push(node.data);
        }
        arr = this.#traverseRec(node.left, order, arr);
        if (order === 'in') {
            arr.push(node.data);
        }
        arr = this.#traverseRec(node.right, order, arr);
        if (order === 'post') {
            arr.push(node.data);
        }

        return arr
    }
}


// const arr = [46, 26, 71, 19, 68, 79, 22, 66, 69, 76, 87]
const arr = [1, 64, 38, 25, 11, 17, 13, 55, 53, 85, 92, 77, 81]
const bsTree = new BST()

let tn1
for (let i = 0; i < arr.length; i++) {
    if (i === 7 ) {
        tn1 = bsTree.insert(arr[i])
    } else {
        bsTree.insert(arr[i])
    }
}

console.log(bsTree.levelOrderTraverse());

// const res = bsTree.getSuccessor(tn1)
// console.log(res);
// const arr = [1, 64, 38]
// let a = bsTree.insert(arr[0])
// let b = bsTree.insert(arr[1])
// let c = bsTree.insert(arr[2])
// console.log(a, b, c);
