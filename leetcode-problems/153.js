// Find Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    let first = 0
    let last = nums.length - 1

    while (first < last) {
        let mid = Math.floor((first + last) / 2)

        if (nums[mid] > nums[last]) {
            first = mid + 1;
        } else {
            last = mid;
        }
    }

    return nums[first]
}

// const arr = [3, 4, 5, 1, 2]
// const arr = [2, 3, 4, 5, 6, 7, 0, 1]
const arr = [4, 5, 6, 7, 2, 3]
const res = findMin(arr)
