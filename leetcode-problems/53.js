// Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let result = nums[0]
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i] + max, nums[i])
        result = Math.max(result, max)
    }

    return result
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// const nums = [5, 4, -1, 7, 8]
// const nums = [1]
const res = maxSubArray(nums)
console.log(res);
