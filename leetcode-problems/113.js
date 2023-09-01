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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = []
    dfs(root, targetSum)

    return res
};

function dfs (node, target, arr2d = [], arr1d = []) {
    if(!node) return

    arr1d.push(node.val)

    if(!node.left && !node.right && (target - node.val) === 0) {
        arr2d.push(arr1d)
        return
    }

    dfs(node.left, target - node.val, arr2d, arr1d)
    dfs(node.right, target - node.val, arr2d, arr1d)
    arr1d.pop()
}



