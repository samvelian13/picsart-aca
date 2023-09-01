// Single Element in a Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mid % 2 === 0) {
            if (nums[mid + 1] && nums[mid] === nums[mid + 1]) {
                start = mid + 1
            } else {
                end = mid - 1
            }

        } else {
            if (nums[mid - 1] && nums[mid] === nums[mid - 1]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }

    return nums[start]
}

// const nums = [1, 1, 2, 3, 3, 4, 4]
const nums = [3, 3, 7, 7, 10, 11, 11]
const res = singleNonDuplicate(nums)
console.log(res);

// [0] - even, [1] - odd
// [0] - odd, [1] - even