// max TC 4^4, f.e. 7979 digits pressed
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) {
        return [];
    }
    const res = []
    const keypad = [
        undefined, undefined,
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ];

    backtrack(keypad, digits, 0, '', res)
    return res
};

const backtrack = (keypad, digits, i, tmp, res) => {
    if (i === digits.length) {
        res.push(tmp)
        return
    }

    for (const char of keypad[digits[i] - '0']) {
        backtrack(keypad, digits, i + 1, tmp + char, res)
    }
}

const digits = "23"
letterCombinations(digits)