// Sort Array By Parity II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = function(nums) {
    let j = 1

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] % 2) {
            while (nums[j] % 2 ) {
                j += 2
            }

            swap(nums, i, j)
        }
    }

    return nums
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [4, 2, 5, 7]
// const arr = [1, 2, 3, 4]
sortArrayByParityII(arr)

