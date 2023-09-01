// Two Sum ||
// 2 ways

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let i = 0
    let j = nums.length - 1

    while (i < j) {
        if (nums[i] + nums[j] === target) {
            return [++i, ++j]
        }

        if (nums[i] + nums[j] < target) {
            i++
        } else {
            j--
        }
    }
}

const res = twoSum([2, 7, 11, 15], 13)
console.log(res)