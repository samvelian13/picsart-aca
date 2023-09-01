// Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    let str = x.toString()
    const lastIndex = str.length - 1;

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false
        }
    }

    return true
}

const x = 121
const res = isPalindrome(x)
console.log(res);
