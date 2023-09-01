// Rotate Array
// slice into 2 arrays, reverse them, and then reverse all

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    k = k % nums.length;

    if (!nums.length) {
        return
    }

    reverseArrayInPlace(nums, 0, nums.length - k - 1)
    reverseArrayInPlace(nums, nums.length - k, nums.length - 1)
    reverseArrayInPlace(nums, 0, nums.length - 1)
}

const arr = [1, 2, 3, 4, 5, 6, 7]
rotate(arr, 3)
console.log(arr);

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function reverseArrayInPlace(arr, start, end) {
    for (let i = start; i <= Math.floor((end + start) / 2); i++) {
        swap(arr, i, end + start - i)
    }
}


// for (let i= 0; i< nums.length; i++) {
//     nums[(i+k)% n] = arr[i]
// }