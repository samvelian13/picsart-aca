// Missing Number

const missingNumber = function (nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    return expectedSum - sum
}

// const nums = [3, 0, 1]
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
const res = missingNumber(nums)
console.log(res);