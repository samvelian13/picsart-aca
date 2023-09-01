// Search in Rotated Sorted Array II

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let first = 0
    let last = nums.length - 1

    while (first <= last) {
        let mid = Math.floor((first + last) / 2)

        if (nums[mid] === target) {
            return true
        }

        if (nums[mid] === nums[first] && nums[mid] === nums[last]) {
            first++
            last--
        } else if (nums[mid] > nums[first]) {
            if (target <= nums[mid] && target >= nums[first]) {
                last = mid - 1
            } else {
                first = mid + 1
            }
        } else {
            if (target <= nums[last] && target >= nums[mid]) {
                first = mid + 1
            } else {
                last = mid - 1
            }
        }
    }

    return false
}

// const arr = [6, 7, 1, 2, 3, 4, 5];
// const arr = [2, 5, 6, 0, 0, 1, 2];
// const arr = [1, 1, 1, 1, 1, 1, 1]
// const arr = [10, 10, 5, 10, 10, 10, 7, 8, 8, 8, 9, 10]
// const arr = [1, 3, 1, 1, 1]
const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]
const target = 2

const res = search(arr, target)
console.log(res);
