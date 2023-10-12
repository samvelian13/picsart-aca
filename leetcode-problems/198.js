/**
 * @param {number[]} nums
 * @return {number}
 */
// const rob = function(nums) {
//     const memo = new Array(nums.length)
//     return dfs(nums, memo, 0)
// };
//
// function dfs(nums, memo, i) {
//     if (i >= nums.length) return 0
//     if (memo[i] !== undefined) return memo[i]
//
//     return memo[i] = Math.max(dfs(nums, memo, i+1), nums[i] + dfs(nums, memo, i+2))
// }

const rob = function (nums) {
    const dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    }

    console.log(dp);
    return dp[nums.length - 1]
}


const nums = [1, 2, 3, 1]
console.log(rob(nums), '__RES');