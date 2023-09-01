// Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    let first = 0
    let last = nums.length - 1
    let start = -1
    let end = -1

    if (!nums.length) {
        return [start, end]
    }

    if (nums.length === 1) {
        if (nums[0] === target) {
            return [0, 0]
        }

        return [start, end]
    }


    while (first <= last) {
        let mid = Math.floor((first + last) / 2)

        if (target > nums[mid]) {
            first = mid + 1
        } else {
            last = mid - 1
        }
    }

    if (nums[first] !== target) return [start, end];

    start = first
    last = nums.length - 1

    while (first <= last) {
        let mid = Math.floor((first + last) / 2)

        if (target >= nums[mid]) {
            first = mid + 1
        } else {
            last = mid - 1
        }
    }


    end = nums[last] === target ? last : -1;
    return [start, end];
}

const nums = [5, 7, 7, 8, 8, 8, 10]
const target = 8

const res = searchRange(nums, target)
console.log(res);