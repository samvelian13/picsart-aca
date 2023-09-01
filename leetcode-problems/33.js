// Search in Rotated Sorted Array
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

        if (target === nums[mid]) {
            return mid
        }

        if (nums[mid] >= nums[first]) {
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

    return -1

};

const arr = [6, 7, 1, 2, 3, 4, 5];
const target = 5;

const res = search(arr, target)
console.log(res);
