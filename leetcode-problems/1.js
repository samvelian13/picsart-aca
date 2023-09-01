// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const tmp = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (tmp.has(target - nums[i])) {
            return [tmp.get(target - nums[i]), i]
        }

        tmp.set(nums[i], i)
    }

    return []
};

const res = twoSum([2, 8, 7, 11, 15], 15)
console.log(res)