/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    const memo = new Array(cost.length + 1).fill(-1)
    return Math.min(dfs(cost, n - 1, memo), dfs(cost, n - 2, memo))
};

function dfs(cost, n, memo) {
    if (n === 0 || n === 1) return cost[n]
    if (memo[n] !== -1) return memo[n]

    return memo[n] = cost[n] + Math.min(dfs(cost, n - 1, memo), dfs(cost, n - 2, memo))
}

const cost = [10, 15, 20]
console.log(minCostClimbingStairs(cost));