// Roman to Integer

const x = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,

}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt2 = function (s) {
    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let num = x[s[i]];

        if (s[i + 1] && s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
            result -= num
        } else if (s[i + 1] && s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
            result -= num
        } else if (s[i + 1] && s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
            result -= num
        } else {
            result += num;
        }
    }

    return result
}

const romanToInt = function(s) {
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;
}

const s = "DXCIX"
console.log(romanToInt(s), '---romanToInt1')