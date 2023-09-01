// 98. Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root, null, null)
};

function dfs(node, min, max) {
    if(!node) {
        return true
    }

    if((min && node.val <= min.val) || (max && node.val >= max.val)) {
        return false
    }

    return dfs(node.left, min, node) && dfs(node.right, node, max)
}