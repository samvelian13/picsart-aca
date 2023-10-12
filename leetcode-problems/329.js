/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    const n = matrix.length
    const m = matrix[0].length
    const memo = Array.from(Array(n), () => Array(m).fill(-1))
    const rowArr = [1, -1, 0, 0]
    const colArr = [0, 0, -1, 1]
    let res = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res = Math.max(res, dfs(i, j, -1))
        }
    }

    function dfs(i, j, prevVal) {
        if (i < 0 || i >= n || j < 0 || j >= m || matrix[i][j] <= prevVal) return 0
        if (memo[i][j] !== -1) return memo[i][j]

        let sum = 1
        for (let k = 0; k < 4; k++) {
            const newI = i + rowArr[k]
            const newJ = j + colArr[k]
            sum = Math.max(sum, dfs(newI, newJ, matrix[i][j]) + 1)
        }

        return memo[i][j] = sum
    }

    return res
};

const matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]
console.log(longestIncreasingPath(matrix), '-RES');