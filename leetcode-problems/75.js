// Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    let i = 0
    let l = 0
    let r = nums.length - 1

    while (i <= r) {
        if (nums[i] === 0) {
            swap(nums, i++, l++)
        } else if (nums[i] === 2) {
            swap(nums, i, r--)
        } else {
            i++
        }
    }
}


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// const nums = [2, 0, 2, 1, 1, 0]
const nums = [1, 2, 0]
sortColors(nums)
console.log(nums);