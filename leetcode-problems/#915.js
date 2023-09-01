// Partition Array into Disjoint Intervals

/**
 * @param {number[]} nums
 * @return {number}
 */

const partitionDisjoint = function (nums) {
    let size = nums.length
    let minArr = new Array(size);
    let maxArr = new Array(size);
    minArr[size - 1] = nums[size - 1]
    maxArr[0] = nums[0]

    for (let i = 1; i < size - 1; i++) {
        maxArr[i] = Math.max(maxArr[i - 1], nums[i])
        minArr[size - 1 - i] = Math.min(minArr[size - i], nums[size - 1 - i])
    }

    for (let i = 0; i < size; i++) {
        if (maxArr[i] <= minArr[i + 1]) {
            return i + 1
        }
    }

    return 0
}

const nums = [5, 0, 3, 2, 8, 6]
// const nums = [1, 1, 1, 0, 6, 12]
// const nums = [3, 0, 4, 1, 5, 2, 8, 6, 7]
const res = partitionDisjoint(nums)
console.log(res);
