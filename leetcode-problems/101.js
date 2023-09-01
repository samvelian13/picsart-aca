// Symmetric Tree
import {BST} from '../DS/Trees/BST.js'

const isSymmetric = function (root) {
    if (!root) return true

    return isSameTree(root.left, root.right);

}
const isSameTree = function (l, r) {
    if (!l && !r) return true
    if (!l || !r) return false

    if (l && r) {
        if (l.data !== r.data) return false
        return isSameTree(l.left, r.right) && isSameTree(l.right, r.left)
    }
}


const bsTree = new BST()
bsTree.insert(1)
bsTree.insert(2)
bsTree.insert(2)
bsTree.insert(3)
bsTree.insert(4)
bsTree.insert(4)
bsTree.insert(3)

console.log(bsTree.getRoot());
const res = isSymmetric(bsTree.getRoot())
console.log(res);
