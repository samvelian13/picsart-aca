// Contains Duplicate ||

const containsNearbyDuplicate = function (nums, k) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //
    //         if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
    //             return true
    //         }
    //     }
    // }
    //
    // return false

    let map = new Map;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i)
    }

    return false;
}

const k = 3
const arr = [1, 2, 3, 1]
// const arr = [1, 2, 3, 1, 2, 3]
// const arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const res = containsNearbyDuplicate(arr, k)
console.log(res);