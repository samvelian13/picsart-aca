// 322. Coin Change


var coinChange = function (coins, amount) {
    const memo = new Array(amount + 1).fill(-1)
    memo[0] = 0
    dfs(coins, memo, amount)
    // console.log(memo, '--memo')
    return memo[amount] === Infinity ? -1 : memo[amount]
};

function dfs(coins, memo, amount) {
    if (amount === 0) return 0
    console.log(memo, '--MEMO', amount);
    if (memo[amount] !== -1) return memo[amount]
    if (amount < 0) return Infinity

    let count = Infinity
    for (const coin of coins) {
        const tmp = dfs(coins, memo, amount - coin)
        console.log(tmp, '--TMP');
        if (tmp !== Infinity) {
            count = Math.min(count, tmp + 1)
        }
        console.log(count, '__COUNT');
    }

    console.log(amount, '-Amount', count);
    return memo[amount] = count
}

const coins = [1, 2, 5]
const amount = 11
coinChange(coins, amount)