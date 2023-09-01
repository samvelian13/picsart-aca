// Same Tree
import {Node, BST} from '../DS/Trees/BST.js'

const isSameTree = function (p, q) {
    if (!p && !q) return true
    if (!p || !q) return false

    return (p.data === q.data) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const p = [1, 2, 3], q = [1, 2, 3]
const bsTree1 = new BST()
const bsTree2 = new BST()

const root1 = bsTree1.insert(1)
bsTree1.insert(2)
bsTree1.insert(3)

const root2 = bsTree2.insert(1)
bsTree2.insert(2)
bsTree2.insert(3)

const res = isSameTree(root1, root2)
console.log(res);