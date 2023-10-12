/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// Top-Down Solution
// var isInterleave = function(s1, s2, s3) {
//         const n = s1.length
//         const m = s2.length
//         if (n + m !== s3.length) return false
//         const dp = Array.from(Array(n+1), () => Array(m+1).fill(-1))
//         return dfs(dp, 0, 0, n, m, s3, s1, s2)
//     };
//
//
// function dfs(dp, i, j, n, m, s3, s1, s2) {
//     if (i === n && j === m) return true
//     if (dp[i][j] !== -1) return dp[i][j]
//     if (i < n && s1[i] === s3[i + j] && dfs(dp, i + 1, j, n, m, s3, s1, s2)) {
//         return true
//     }
//
//     if (j < m && s2[j] === s3[i + j] && dfs(dp, i, j + 1, n, m, s3, s1, s2)) {
//         return true
//     }
//
//     dp[i][j] = 0
//     return false
// }

// Bottom-Up Solution
var isInterleave = function (s1, s2, s3) {
    const n = s1.length
    const m = s2.length
    const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(false))
    dp[n][m] = true

    for (let i = n; i >= 0; i--) {
        for (let j = m; j >= 0; j--) {
            if (s1[i] === s3[i + j]) {
                dp[i][j] = dp[i][j] || dp[i + 1][j]
            }
            if (s2[j] === s3[i + j]) {
                dp[i][j] = dp[i][j] || dp[i][j + 1]
            }
        }
    }

    console.table(dp);
    return dp[0][0]
}

const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
isInterleave(s1, s2, s3)