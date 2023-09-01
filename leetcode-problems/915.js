// Partition Array into Disjoint Intervals

/**
 * @param {number[]} nums
 * @return {number}
 */

const partitionDisjoint = function (nums) {
    let currMax = nums[0];
    let possibleMax = nums[0];
    let length = 1;

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < currMax) {
            currMax = possibleMax;
            length = i + 1;
        } else {
            possibleMax = Math.max(possibleMax, nums[i]);
        }
    }

    return length;
}




const nums = [5, 0, 3, 2, 8, 6]
// const nums = [1, 1, 1, 0, 6, 12]
// const nums = [3, 0, 4, 1, 5, 2, 8, 6, 7]
const res = partitionDisjoint(nums)
console.log(res);
