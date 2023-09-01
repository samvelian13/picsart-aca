// Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {

    let tmp = 0
    for (let i = 0; i < nums.length; i++) {
        tmp = tmp ^ nums[i]
    }

    return tmp
}

const arr = [4, 1, 2, 1, 2]
const res = singleNumber(arr)
