/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
    const result = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('')
    return parseInt(result) === 0 ? '0' : result
};

const nums = [3, 30, 34, 5, 9]
// const nums = [8, 94, 9, 89] // 9, 94, 89, 8
largestNumber(nums)