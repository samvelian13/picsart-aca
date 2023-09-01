// try to use hashmap
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const res = []
    const counterMap = new Map()

    for (const num of nums) {
        counterMap.set(num, (counterMap.get(num) || 0) + 1)
    }

    const backtrack = (nums, tmp) => {
        if (tmp.length === nums.length) {
            res.push([...tmp])
            return
        }

        for (const [key, value] of counterMap) {
            if (value > 0) {
                counterMap.set(key, value - 1);
                tmp.push(key)
                backtrack(nums, tmp)
                tmp.pop()
                counterMap.set(key, value);
            }
        }
    }

    backtrack(nums, [])
    return res
};

const nums = [1, 1, 2]
console.log(permuteUnique(nums));