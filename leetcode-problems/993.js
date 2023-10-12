// Cousins in Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) return false;
    const queue = new Queue()
    let foundX = null
    let foundY = null
    queue.enqueue([root, null, 0])

    while (!queue.isEmpty()) {
        const [node, parent, depth] = queue.dequeue()

        if(node.val === x) {
            foundX = [parent, depth]
        } else if(node.val === y) {
            foundY = [parent, depth]
        }

        if(foundX && foundY) return (foundX[0] !== foundY[0] && foundX[1] === foundY[1])

        if (node.left) {
            queue.enqueue([node.left, node, depth + 1])
        }

        if (node.right) {
            queue.enqueue([node.right, node, depth + 1])
        }
    }

    return false
};

