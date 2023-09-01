// Shuffle the Array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    const res = new Array(2 * n);
    let j = 0;

    for (let i = 0; i < n; i++) {
        console.log(i);
        res[j++] = nums[i];
        res[j++] = nums[i + n];
        console.log(res);
    }

    return res
};

const arr = [2, 5, 1, 3, 4, 7];
const n = 3
const res = shuffle(arr, n)
// console.log(res);