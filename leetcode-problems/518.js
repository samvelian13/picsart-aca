var change = function (amount, coins) {
    const m = coins.length
    const dp = Array.from(Array(m + 1), () => Array(amount + 1).fill(0))

    for(let i = 0; i <= m; i++) {
        dp[i][0] = 1
    }

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= amount; j++) {
            dp[i][j]
        }
    }

    return
};


const amount = 5, coins = [1, 2, 5]
change(amount, coins)