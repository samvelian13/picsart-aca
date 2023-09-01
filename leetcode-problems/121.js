// Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let index = 0
    let currentMax = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[index]) {
            index = i
        } else {
            if (currentMax < prices[i] - prices[index]) {
                currentMax = prices[i] - prices[index]
            }
        }
    }

    return currentMax
}

const prices = [7, 1, 5, 3, 6, 4]
const res = maxProfit(prices)
console.log(res);