// Backtracking TC - O() , SC - O()
// function robCutting(length, prices) {
//     const backtrack = (n) => {
//         if (n === 0) return 0
//         let price = -Infinity
//
//         for (let i = 1; i <= n; i++) {
//             price = Math.max(price, prices[i] + backtrack(n - i))
//         }
//         return price
//     }
//
//     return backtrack(length)
// }

// Top Down Approach - Memoization TC - O(N ^ 2) , SC - O(n)
// function robCutting(length, prices) {
//     const memo = new Array(length + 1).fill(-1)
//
//     const backtrack = (n) => {
//         if (n === 0) return 0
//         if (memo[n] !== -1) return memo[n]
//         let price = -Infinity
//
//         for (let i = 1; i <= n; i++) {
//             price = Math.max(price, prices[i] + backtrack(n - i))
//         }
//         return memo[n] = price
//     }
//
//     return backtrack(length)
// }

// Bottom Up Approach - Tabulation TC - O(N ^ 2)
function robCutting(length, prices) {
    const dp = new Array(length + 1).fill(0)
    const parent = new Array(length + 1).fill(0)

    const backtrack = (n) => {
        for (let i = 1; i <= n; i++) {
            let price = 0
            for (let j = 1; j <= i; j++) {
                // price = Math.max(price, prices[j] + dp[i - j])
                if (price < prices[j] + dp[i - j]) {
                    price = prices[j] + dp[i - j]
                    parent[i] = j
                }
            }

            dp[i] = price
        }
    }

    backtrack(length)
    let n = length

    while (n > 0) {
        console.log(parent[n])
        n -= parent[n]
    }

    return dp[length]
}


const length = 5
const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]
console.log(robCutting(length, prices));