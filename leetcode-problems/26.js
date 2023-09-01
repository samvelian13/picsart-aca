//  Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i]) {
            nums[j++] = nums[i];
        }
    }

    nums.length = j
    return j
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const res = removeDuplicates(arr)
console.log(arr);