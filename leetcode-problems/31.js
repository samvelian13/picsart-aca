//  Next Permutation
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const next_permutation = function (nums) {
    let noFoundPermutation = true

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i + 1] && nums[i] < nums[i + 1]) {
            const nextBigNumIdx = findNexBigNum(i)
            console.log(nextBigNumIdx);
            swap(nextBigNumIdx, i)
            reverseArrayInPlace(i + 1)
            noFoundPermutation = false
            break
        }
    }

    if (noFoundPermutation) {
        reverseArrayInPlace(0)
    }

    function findNexBigNum(index) {
        for (let i = nums.length - 1; i > index; i--) {
            if (nums[i] > nums[index]) return i;
        }
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverseArrayInPlace(starter) {
        for (let i = 0; i < Math.floor((nums.length - starter) / 2); i++) {
            swap(starter + i, nums.length - 1 - i)
        }
    }
}

const arr = [1, 2, 3]
next_permutation(arr)
console.log(arr);
