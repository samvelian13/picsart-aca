// Best Time to Buy and Sell Stock II
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let profit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }

    }

    return profit
}

// const prices = [1,2,3,4,5]
const prices = [7, 2, 3, 54, 1]
// const prices = [7, 1, 5, 3, 6, 4]
const res = maxProfit(prices)
console.log(res);