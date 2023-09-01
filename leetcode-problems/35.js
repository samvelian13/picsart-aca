// Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let first = 0
    let last = nums.length - 1
    let mid

    while (first <= last) {
        mid = Math.floor((first + last) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
        console.log(first, last);

    }

    return first;
}

const arr = [1, 3, 4, 8, 9, 10];
const target = 5

const res = searchInsert(arr, target)
console.log(res);