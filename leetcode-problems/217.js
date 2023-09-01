// Contains Duplicate

const containsDuplicate = function (nums) {
    const hashSet = new Set(nums);
    return hashSet.size !== nums.length
}

// const arr = [1, 2, 3, 1]
// const arr = [1, 2, 3, 4]
const arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const res = containsDuplicate(arr)
console.log(res);