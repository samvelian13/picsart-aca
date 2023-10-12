/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    const n = nums.length
    if (n === 1) return nums[0]

    return Math.max(dfs(nums, 0, n - 2), dfs(nums, 1, n - 1))
}

function dfs(nums, i, n) {
    console.log(i, n, '----------------');
    let prev = 0
    let curr = 0

    for (let j = i; j <= n; j++) {
        const tmp = Math.max(nums[j] + prev, curr)
        prev = curr
        curr = tmp
    }

    return curr
}

// var rob = function (nums) {
//     const n = nums.length
//     if (n === 1) return nums[0];
//     let dp = new Array(n).fill(-1)
//
//     const f = dfs(nums, dp, 1, n - 1)
//     dp = new Array(n).fill(-1)
//     const s = dfs(nums, dp, 0, n - 2)
//     return Math.max(f, s)
// };
//
// function dfs(nums, dp, i, n) {
//     if (i > n) return 0;
//     if (dp[i] !== -1) return dp[i];
//
//     return dp[i] = Math.max((nums[i] + dfs(nums, dp, i+2, n)), dfs(nums, dp, i+1, n));
// }

// function rob(nums) {
//     const n = nums.length
//     if (n === 1) return nums[0];
//
//     return Math.max(dfs(nums, 1, n - 1), dfs(nums, 0, n - 2))
// }
//
// function dfs(nums, i, n) {
//     console.log(nums, '--nums', i, n);
//     const dp = new Array(n).fill(0);
//     dp[0] = nums[i];
//     dp[1] = Math.max(nums[i], nums[i + 1]);
//
//     for (let j = 2; j <= n; j++) {
//         console.log(j, nums[j]);
//         dp[j] = Math.max(dp[j - 1], dp[j - 2] + nums[j]);
//     }
//
//     console.log(dp, '=====DP');
//     return dp[n - 1];
// }

// const nums = [1, 2, 3, 1]
const nums = [2, 3, 2]
// const nums = [200, 3, 140, 20, 10]
console.log(rob(nums), '__RES');