import Stack from '../Stack/Stack.js'
import Queue from '../Queue/Queue.js'

const Colors = {
    RED: 0,
    BLACK: 1
}

export class Node {
    constructor(val, left, right, parent, color) {
        this.data = val
        this.left = left
        this.right = right
        this.parent = parent
        this.color = Colors[color]
    }
}

export class RBT {
    #root
    #nill

    constructor() {
        this.#nill = new Node(null, null, null, null, 'BLACK')
        this.#root = this.#nill
    }

    getRoot() {
        return this.#root
    }

    searchIterative(target) {
        return this.#searchIterativeHelper(this.#root, target)
    }

    searchRec(target) {
        return this.#searchRecHelper(this.#root, target)
    }

    insert(val) {
        const node = new Node(val, this.#nill, this.#nill, null, 'RED')
        this.#insertHelper(node)
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

    #insertHelper(z) {
        let y = this.#nill
        let x = this.#root

        while (x !== this.#nill) {
            y = x
            if (z.data < x.data) {
                x = x.left
            } else {
                x = x.right
            }
        }

        z.parent = y

        if (y === this.#nill) {
            this.#root = z
        } else if (z.data < y.data) {
            y.left = z
        } else {
            y.right = z
        }

        this.#insertFixupHelper(z)
    }

    #insertFixupHelper(z) {
        while (z.parent.color === Colors['RED']) {
            let y
            if (z.parent === z.parent.parent.left) {
                y = z.parent.parent.right // uncle node

                if (y.color === Colors['RED']) { // Case 1
                    z.parent.color = Colors['BLACK']
                    y.color = Colors['BLACK']
                    z.parent.parent.color = Colors['RED']
                    z = z.parent.parent
                } else {
                    if (z === z.parent.right) { // Case 2
                        z = z.parent
                        this.#leftRotate(z)
                    }
                    z.parent.color = Colors['BLACK']
                    z.parent.parent.color = Colors['RED']
                    this.#rightRotate(z.parent.parent)
                }
            } else {
                y = z.parent.parent.left

                if (y.color === Colors['RED']) {
                    z.parent.color = Colors['BLACK']
                    y.color = Colors['BLACK']
                    z.parent.parent.color = Colors['RED']
                    z = z.parent.parent
                } else {
                    if (z === z.parent.left) {
                        z = z.parent
                        this.#rightRotate(z)
                    }
                    z.parent.color = Colors['BLACK']
                    z.parent.parent.color = Colors['RED']
                    this.#leftRotate(z.parent.parent)
                }
            }
        }

        this.#root.color = Colors['BLACK']
    }

    #leftRotate(x) {
        const y = x.right
        x.right = y.left

        if (y.left !== this.#nill) {
            y.left.parent = x
        }

        y.parent = x.parent
        if (x.parent === this.#nill) {
            this.#root = y
        } else if (x === x.parent.left) {
            x.parent.left = y
        } else {
            x.parent.right = y
        }

        y.left = x
        x.parent = y
    }

    #rightRotate(y) {
        const x = y.left
        y.left = x.right

        if (x.right !== this.#nill) {
            x.right.parent = y
        }

        x.parent = y.parent
        if (y.parent === this.#nill) {
            this.#root = x
        } else if (y === y.parent.left) {
            y.parent.left = x
        } else {
            y.parent.right = x
        }

        x.right = y
        y.parent = x
    }

    #transplant(u, v) {
        if (u.parent === this.#nill) {
            this.#root = v
        } else if (u === u.parent.left) {
            u.parent.left = v
        } else {
            u.parent.right = v
        }

        v.parent = u.parent
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

    getPredecessor(x) {
        if (x.left !== this.#nill) {
            return this.#getMax(x.left);
        }

        let y = x.parent;
        while (y !== this.#nill && x === y.left) {
            x = y;
            y = y.parent;
        }

        return y;
    }

    getSuccessor(x) {
        if (x.right !== this.#nill) {
            return this.#getMin(x.right);
        }

        let y = x.parent;
        while (y !== this.#nill && x === y.right) {
            x = y;
            y = y.parent;
        }
        return y;
    }

    traverseRec(node, order) {
        return this.#traverseRec(node, order, [])
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
            if (!node || !node.data) return null
            if (!res[level]) {
                res.push([])
            }

            const currentColor = Object.keys(Colors).find(key => Colors[key] === node.color)
            const direction = node.parent.left ? (node === node.parent.left ? 'Left' : 'Right') : 'Root'
            let str = `${node.data} (${currentColor}) - ${direction}`

            res[level].push(str)
            traverseNode(node.left, level + 1)
            traverseNode(node.right, level + 1)
        }

        return res
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

const RBTree = new RBT()
const a = RBTree.insert(50)
RBTree.insert(40)
RBTree.insert(30)
RBTree.insert(55)
// const root = RBTree.getRoot()
// console.log(RBTree.getPredecessor(a));
// console.log(RBTree.getSuccessor(a));
// debugger
