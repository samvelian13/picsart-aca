/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const m = nums.reduce((accum, a) => accum + a, 0);
    const n = nums.length
    const dp = Array.from(Array(n), () => Array(2 * m + 1).fill(-1))

    const backtrack = (nums, target, dp, i, sum, m) => {
        if (i === n) return sum === target ? 1 : 0
        if (dp[i][sum + m] !== -1) return dp[i][sum + m]

        return dp[i][sum + m] = backtrack(nums, target, dp, i + 1, sum + nums[i], m) + backtrack(nums, target, dp, i + 1, sum - nums[i], m)
    }

    return backtrack(nums, target, dp, 0, 0, m)
};

const nums = [1, 1, 1, 1, 1], target = 3
console.log(findTargetSumWays(nums, target));