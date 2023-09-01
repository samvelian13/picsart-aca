// TC - O(2^n), SC - O(n)
function subsetSum(arr, sum, i) {
    if (sum === 0) return true;
    if (i < 0) return false;
    if (arr[i] > sum) return subsetSum(arr, sum, i - 1);

    return subsetSum(arr, sum, i - 1) || subsetSum(arr, sum - arr[i], i - 1);
}

let arr = [1, 2, 3, 4]
let target = 11
console.log(subsetSum(arr, target, arr.length - 1))
