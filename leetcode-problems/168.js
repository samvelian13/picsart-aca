// Excel Sheet Column Title

/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
    let res = '';

    while (columnNumber > 0) {
        columnNumber--
        res = String.fromCharCode(columnNumber % 26 + 65) + res
        columnNumber = Math.floor(columnNumber / 26)
    }

    return res
}

const columnNumber = 18202
// const columnNumber = 26
const res = convertToTitle(columnNumber)
console.log(res, '--RES');

