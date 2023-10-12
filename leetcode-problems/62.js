/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) { // 3, 7
    const dp = Array.from(Array(m), () => Array(n).fill(0))


    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 || j === n - 1) {
                dp[i][j] = 1
            } else {
                dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
            }
        }
    }

    return dp[0][0]
};

// var uniquePaths = function(m, n) {
//     const memo = Array.from(Array(m), () => Array(n))
//
//     return dfs(m, n, memo, 0, 0)
// };
//
// function dfs(m, n, memo, i, j) {
//     if(i === m-1 || j === n-1) return 1
//     if (memo[i][j] !== undefined) return memo[i][j]
//
//     return memo[i][j] = dfs(m, n, memo, i + 1, j) + dfs(m, n, memo, i, j+1)
// }

const m = 3, n = 7
uniquePaths(m, n)