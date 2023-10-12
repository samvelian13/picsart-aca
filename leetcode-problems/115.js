/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// var numDistinct = function (s, t) {
//     const n = s.length
//     const m = t.length
//     const memo = Array.from(Array(n), () => Array(m).fill(-1))
//
//     // for (let i = 0; i <= n; i++) {
//     //     memo[i][m] = 1
//     // }
//
//     dfs(s, t, n, m, 0, 0, memo)
//     return memo[0][0]
// };
//
// function dfs(s, t, n, m, i, j, memo) {
//     if (j === m) return 1
//     if (i === n) return 0
//     if (memo[i][j] !== -1) return memo[i][j]
//
//     if (s[i] === t[j]) {
//         memo[i][j] = dfs(s, t, n, m, i + 1, j + 1, memo) + dfs(s, t, n, m, i + 1, j, memo)
//     } else {
//         memo[i][j] = dfs(s, t, n, m, i + 1, j, memo)
//     }
//
//     return memo[i][j]
// }

var numDistinct = function(s, t) {
    const n = s.length
    const m = t.length
    const dp = Array.from(Array(n+1), () => Array(m+1).fill(0))

    for(let i = 0; i <= n; i++) {
        dp[i][m] = 1
    }

    for(let i = n - 1; i >= 0 ; i--) {
        for(let j = m - 1; j >= 0; j--) {
            if(s[i] === t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i+1][j]
            } else {
                dp[i][j] = dp[i + 1][j]
            }
        }
    }

    return dp[0][0] > 1147483647 ? -1: dp[0][0]
};

const s = "babgbag", t = "bag"
// const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// const t = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
numDistinct(s, t)