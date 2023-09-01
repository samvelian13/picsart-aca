// Array Partition

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
    let sum = 0
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        sum += Math.min(nums[i], nums[i + 1])
    }

    return sum
}

const nums = [-470, 66, -4835, -5623]
const res = arrayPairSum(nums)
// console.log(res)