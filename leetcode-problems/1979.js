// Find Greatest Common Divisor of Array
// By Euclid's algorithm

/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD1 = function (nums) {
    return findGCDRec(findMaxAndMin(nums))
}

const findGCDRec = function (nums) {
    let [a, b] = nums

    if (!a && !b) {
        return undefined
    }

    if (!a || !b) {
        return !a ? b : a
    }

    const r = a % b
    return findGCD([b, r])
}

// By finding the common divisors
const findGCD = function (nums) {
    let [min, max] = findMaxAndMin(nums)

    for (let i = max; i >= 0; i--) {
        if (max % i === 0 && min % i === 0) return i;
    }
}

const findMaxAndMin = function (arr) {
    let grNum = arr[0]
    let smNum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > grNum) {
            grNum = arr[i]
        } else if (arr[i] < smNum) {
            smNum = arr[i]
        }
    }

    return [grNum, smNum]
}

const arr = [2, 5, 6, 9, 10];
const res = findGCD(arr)
console.log(res);
