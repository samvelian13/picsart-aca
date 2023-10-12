/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//     const dp = new Array(nums.length + 1).fill(1)
//
//     for (let i = nums.length; i >= 0; i--) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] > nums[i]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1)
//             }
//         }
//     }
//
//     return Math.max(...dp)
// };

var lengthOfLIS = function(nums) {
    const arr = []

    for(const num of nums) {
        if (!arr.length || arr[arr.length - 1] < num) {
            arr.push(num)
        } else {
            const index = findLowerBoundIndex(arr, num)
            arr[index] = num
        }
    }

    console.log(arr);
    return arr.length
};

function findLowerBoundIndex(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === key) {
            return mid
        } else if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
}


// const nums = [10, 9, 2, 5, 3, 7, 101, 18]
const nums = [2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums), '-Res');
