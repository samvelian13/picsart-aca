// var numDecodings = function (s) {
//     const n = s.length
//     const memo = new Array(n + 1).fill(-1)
//     memo[n] = 1
//
//     return dfs(s, 0, n, memo)
// };
//
// function dfs(s, i, n, memo) {
//     if (s[i] === '0') return 0
//     if (memo[i] !== -1) return memo[i]
//
//     let res = dfs(s, i + 1, n, memo)
//
//     if (i + 1 < n && ((s[i] === '2' && s[i + 1] <= 6) || s[i] === '1')) {
//         res += dfs(s, i + 2, n, memo)
//     }
//
//     return memo[i] = res
// }

const s = "226"
// const s = "1"

var numDecodings = function (s) {
    const n = s.length
    const dp = new Array(n + 1).fill(0)
    dp[n] = 1

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            dp[i] = 0
        } else {
            dp[i] = dp[i + 1]
        }

        if (i + 1 && ((s[i] === '2' && s[i + 1] <= 6) || s[i] === '1')) {
            dp[i] = dp[i + 2]
        }
    }

    return dp[0]
}

console.log(numDecodings(s));