// 46. Permutations


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []

    const backtrack = (index) => {
        if (index === nums.length) {
            res.push([...nums])
            return
        }

        for (let i = index; i < nums.length; i++) {
            swap(nums, i, index)
            backtrack(index + 1)
            swap(nums, i, index)
        }

    }

    backtrack(0)
    return res
};

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const nums = [1, 2, 3]
console.log(permute(nums));