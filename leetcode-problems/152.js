// Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct1 = function (nums) {
    let result = nums[0]
    let min = 1
    let max = 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            // swap(min, max) // values
            const tmp = min
            min = max
            max = tmp
        }

        max = Math.max(nums[i] * max, nums[i])
        min = Math.min(nums[i] * min, nums[i])

        result = Math.max(result, max)
    }

    return result
}

const maxProduct = function (nums) {
    let result = nums[0]
    let min = 1
    let max = 1

    for (let i = 0; i < nums.length; i++) {
        let tmp = nums[i] * max
        max = Math.max(nums[i] * max, nums[i] * min, nums[i])
        min = Math.min(tmp, nums[i] * min, nums[i])

        result = Math.max(result, max)
    }

    return result
}

// const nums = [-2, 0, -1]
// const nums = [2, 3, -2, 4]
// const nums = [3, 0, 5, -6]
// const nums = [-2, 3, -4]
const nums = [3, -4, 5, -6]
// const nums = [-3, -4, -5, -6]
const res = maxProduct1(nums)
console.log(res);