// Approach 7: Boyer-Moore Voting Algorithm
// sort and get middle element
// with hash
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    let count = 0;
    let candidate = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
        }

        count += (nums[i] === candidate) ? 1 : -1;
    }

    return candidate;
}
// const nums = [3, 3, 4]
const nums = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 7, 7, 7, 7]
// const nums = [2, 2, 1, 1, 1, 2, 2]
const res = majorityElement(nums)
// console.log(res);

