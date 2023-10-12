// var jump = function (nums) { // DP
//     const n = nums.length
//     const dp = new Array(n).fill(Infinity)
//     dp[0] = 0
//
//     for (let i = 0; i < n; i++) {
//         const jump = nums[i] + i
//         for (let j = i + 1; j <= jump && j < n; j++) {
//             if (dp[j] > dp[i] + 1) {
//                 dp[j] = dp[i] + 1
//             }
//
//             // dp[j] = Math.min(dp[j], dp[i] + 1)
//         }
//
//     }
//
//     return dp[n - 1]
// };

// var jump = function (nums) {
//     let count = 0
//     let last = 0
//     let jump = 0
//
//     for (let i = 0; i < nums.length; i++) {
//         jump = Math.max(jump, nums[i] + i)
//
//         if (i === last) {
//             last = jump
//             count++
//         }
//         console.log(jump, last, count, '--', i);
//     }
//
//     return count
// };

var jump = function (nums) {
    let res = 0;
    let left = 0, right = 0;
    let n = nums.length;
    while (right < n - 1) {
        let farthest = 0;
        let i = left;

        while (i < right + 1) {
            farthest = Math.max(farthest, i + nums[i]);
            ++i;
        }

        left = right + 1;
        right = farthest;
        res += 1;

        debugger
    }
    return res;
}

// const nums = [10, 2, 2, 2, 2, 10, 1, 1, 2, 1, 1, 1, 1, 1, 1, 15]
const nums = [2, 3, 1, 1, 4]
// const nums = [2, 1]
console.log(jump(nums), '__RES');