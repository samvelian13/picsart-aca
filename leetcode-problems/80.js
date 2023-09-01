//  Remove Duplicates from Sorted Array ||
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 2] !== nums[i]) {
            nums[j++] = nums[i];
        }
    }

    nums.length = j
    return j
}

const arr = [1, 1, 1, 2, 2, 2, 3];
const res = removeDuplicates(arr)
console.log(res, arr);