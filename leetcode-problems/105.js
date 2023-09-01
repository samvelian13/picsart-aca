// Construct Binary Tree from Preorder and Inorder Traversal

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const inorderMap = new Map()
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i)
    }

    let index = 0

    function dfs(preorder, inorderMap, start, end) {
        if (start > end) {
            return null
        }

        let rootVal = preorder[index++]
        const node = new TreeNode(rootVal)

        node.left = dfs(preorder, inorderMap, start, inorderMap.get(rootVal) - 1)
        node.right = dfs(preorder, inorderMap, inorderMap.get(rootVal) + 1, end)

        return node
    }

    return dfs(preorder, inorderMap, 0, inorder.length - 1)
};

const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder));