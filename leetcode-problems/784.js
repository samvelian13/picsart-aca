/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const res = []
    backtrack(s, '', 0, res)

    console.log(res);
    return res
};


const backtrack = (s, tmp, i, res) => {
    if (i === s.length) {
        res.push(tmp)
        return
    }

    if (/^[0-9]$/.test(s[i])) {
        backtrack(s, tmp + s[i], i + 1, res)
    } else {
        backtrack(s, tmp + s[i].toLowerCase(), i + 1, res)
        backtrack(s, tmp + s[i].toUpperCase(), i + 1, res)
    }
}

function toggleCaseAtIndex(inputString, index) {
    if (index < 0 || index >= inputString.length) {
        // Index is out of bounds, return the original string
        return inputString;
    }

    const char = inputString[index];
    const toggledChar = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

    return (
        inputString.slice(0, index) + toggledChar + inputString.slice(index + 1)
    );
}

const s = "a1b2"
letterCasePermutation(s)