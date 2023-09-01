// Add Digits

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
    if (num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
}

const num = 256
const res = addDigits(num)
console.log(res);