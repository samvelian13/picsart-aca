/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function (s, wordDict) {
//     const dp = new Array(s.length + 1).fill(false)
//     dp[s.length] = true
//
//     for (let i = s.length - 1; i >= 0; i--) {
//         for (const word of wordDict) {
//             if (i + word.length <= s.length && s.substring(i, i + word.length) === word) {
//                 dp[i] = dp[i] || dp[i + word.length]
//             }
//         }
//     }
//
//     return dp[0]
// };

// var wordBreak = function (s, wordDict) {
//     const wordSet = new Set(wordDict);
//     const dp = new Array(s.length + 1).fill(false);
//     dp[0] = true;
//
//     for (let i = 1; i <= s.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (dp[j] && wordSet.has(s.substring(j, i))) {
//                 dp[i] = true;
//                 break;
//             }
//         }
//     }
//
//     return dp[s.length];
// };

const wordBreak = function (s, wordDict) {
    const memo = new Array(s.length + 1).fill(-1)
    memo[s.length] = 1

    dfs(s, wordDict, memo, 0)
}

function dfs(s, wordDict, memo, i) {
    if (i < 0) return true
    if (memo[i] !== -1) return memo[i]

    for (const word of wordDict) {
        if (i + word.length <= s.length && s.substring(i, i + word.length) === word) {
            memo[i] = memo[i] || memo[i + word.length]
        }
    }

    dfs(s, wordDict, memo, i - 1)
    return
}


// const s = "cars", wordDict = ["car", "ca", "rs"]
const s = "abcd", wordDict = ["a", "abc", "b", "cd"]
// const s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// const s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict), '__RES');
