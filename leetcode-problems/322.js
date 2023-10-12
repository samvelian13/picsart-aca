// 322. Coin Change
// tabulation
// var coinChange = function(coins, amount) {
//     const dp = new Array(amount + 1).fill(Infinity)
//     dp[0] = 0
//
//     for(const coin of coins) {
//         for(let currentAmount = coin; currentAmount <= amount; currentAmount++) {
//             if (dp[currentAmount - coin] !== Infinity) {
//                 dp[currentAmount] = Math.min(dp[currentAmount], dp[currentAmount - coin] + 1)
//             }
//         }
//     }
//
//     return dp[amount] === Infinity ? -1 : dp[amount]
// };

// top down
var coinChange = function (coins, amount) {
    if (!amount) return 0;
    const memo = new Array(amount + 1).fill(-1)
    dfs(coins, memo, amount)
    return memo[amount] === Number.MAX_SAFE_INTEGER ? -1 : memo[amount]
};

function dfs(coins, memo, amount) {
    if (amount === 0) return 0;
    if (memo[amount] !== -1) return memo[amount]

    let count = Number.MAX_SAFE_INTEGER
    for (const coin of coins) {
        if(amount >= coin) {
            count = Math.min(count, dfs(coins, memo, amount - coin) + 1)
        }
    }

    return memo[amount] = count
}

const coins = [1,2,5], amount = 11
// const coins = [1, 2, 5]
// const amount = 11
// const coins = [2], amount = 3
// const coins = [1]
// const amount = 0
console.log(coinChange(coins, amount), '_Res');