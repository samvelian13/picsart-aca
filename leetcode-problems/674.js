// Longest Continuous Increasing Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let max = 1;
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            dp[i] = dp[i - 1] + 1;
            max = Math.max(max, dp[i])
        }
    }
    return max;
};

const nums = [1, 3, 5, 4, 7]
console.log(findLengthOfLCIS(nums), '-RES');