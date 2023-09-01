// 1863. Sum of All Subset XOR Totals

/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
    let res = 0

    const backtrack = (tmp, i) => {
        res += tmp.reduce((a, b) => a ^ b, 0)

        for (; i < nums.length; i++) {
            tmp.push(nums[i])
            backtrack(tmp, i + 1)
            tmp.pop()
        }
    }

    backtrack([], 0)
    return res
};

// const nums = [1, 3]
const nums = [5, 1, 6]
console.log(subsetXORSum(nums));
