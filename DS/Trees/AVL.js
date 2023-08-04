import Stack from '../Stack.js'
import Queue from '../Queue.js'

export class Node {
    constructor(val, left = null, right = null) {
        this.left = left
        this.right = right
        this.data = val
    }
}

export class AVL {
    #root

    constructor(node) {
        this.#root = node ?? null
        this.size = 0
    }

    getRoot() {
        return this.#root
    }

    isBalanced(root) {
        if (!root) return true
        let lh = this.#getHeight(root.left)
        let rh = this.#getHeight(root.right)

        return Math.abs(lh - rh) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    insert(key) {
        this.size++
        this.#root = this.#insertHelper(this.#root, key)
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

    #insertHelper(node, key) {
        if (!node) {
            return new Node(key)
        }

        if (key > node.data) {
            node.right = this.#insertHelper(node.right, key)
        } else {
            node.left = this.#insertHelper(node.left, key)
        }

        const bf = this.#getBalanceFactor(node)

        if (bf > 1 && key < node.left.data) {
            return this.#rightRotate(node)
        }

        if (bf > 1 && key >= node.left.data) {
            node.left = this.#leftRotate(node.left)
            return this.#rightRotate(node)
        }

        if (bf < -1 && key > node.right.data) {
            return this.#leftRotate(node)
        }

        if (bf < -1 && key <= node.right.data) {
            node.right = this.#rightRotate(node.right)
            return this.#leftRotate(node)
        }

        return node
    }

    #deleteHelper(node, key) {
        if (!node) return node

        if (key < node.data) {
            node.left = this.#deleteHelper(node.left, key)
        } else if (key > node.data) {
            node.right = this.#deleteHelper(node.right, key)
        } else {
            if (!node.left) {
                return node.right
            } else if (!node.right) return node.left

            const tmpNode = this.#getMin(node.right)
            node.data = tmpNode.data
            node.right = this.#deleteHelper(node.right, tmpNode.data)
        }

        const bf = this.#getBalanceFactor(node)

        if (bf > 1) {
            if (this.#getBalanceFactor(node.left) >= 0) {
                return this.#rightRotate(node)
            }

            if (this.#getBalanceFactor(node.left) < 0) {
                this.#leftRotate(node.left)
                return this.#rightRotate(node)
            }
        }

        if (bf < -1) {
            if (this.#getBalanceFactor(node.right) <= 0) {
                return this.#leftRotate(node)
            }
            if (this.#getBalanceFactor(node.right) > 0) {
                node.right = this.#rightRotate(node.right)
                return this.#leftRotate(node)
            }
        }

        return node
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

    #getBalanceFactor(node) {
        if (!node) return 0
        return this.#getHeight(node.left) - this.#getHeight(node.right)
    }

    #leftRotate(z) {
        const y = z.right
        const T2 = y.left

        y.left = z
        z.right = T2

        return y
    }

    #rightRotate(z) {
        const y = z.left
        const T3 = y.right

        y.right = z
        z.left = T3

        return y
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
const bsTree = new AVL()

for (let i = 0; i < arr.length; i++) {
    bsTree.insert(arr[i])
}

const res = bsTree.isBalanced(bsTree.getRoot())
console.log(res);
