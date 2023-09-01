// Find the Middle Index in Array

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function (nums) {
    let left = 0
    let right = 0

    for (let i in nums) {
        right += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        right -= nums[i]

        if (left === right) {
            return i
        }

        left += nums[i]
    }

    return -1
}

const arr = [2,3,-1,8,4]
const res = findMiddleIndex(arr)
console.log(res);