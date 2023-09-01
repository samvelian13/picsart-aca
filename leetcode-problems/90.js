/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const res = []
    // nums.sort((a,b)=>a-b)

    dfs(nums, 0, [], res)
    return res
};

const dfs = (nums, index, tmp, res) => {
    res.push([...tmp])

    for (let i = index; i < nums.length; i++) {
        console.log(i, index, [...tmp, nums[i]], '===', nums[i]);
        if (i > index && nums[i] === nums[i - 1]) continue;

        tmp.push(nums[i])
        dfs(nums, i + 1, tmp, res)
        tmp.pop()
    }
}

// [[],[1],[1,2],[1,2,2],[2],[2,2]]
const nums = [1, 2, 2]
console.log(subsetsWithDup(nums), '___Reds');