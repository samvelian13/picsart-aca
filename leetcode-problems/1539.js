// Kth Missing Positive Number

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
    let f = 0
    let l = arr.length - 1

    while (f <= l) {
        let mid = Math.floor((f + l) / 2)
        let x = arr[mid] - (mid + 1)

        if (x < k) {
            f = mid + 1
        } else {
            l = mid - 1
        }

    }

    return f + k
}

const arr = [2, 3, 4, 7, 11]
const k = 5

const res = findKthPositive(arr, k)
// console.log(res);