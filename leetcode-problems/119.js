// Pascal's Triangle ||

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    const row = [1];

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            if (j === i) {
                row[j] = 1;
            } else {
                row[j] = row[j - 1] + row[j];
            }
        }
    }

    return row
}

const rowIndex = 3
const res = getRow(rowIndex)
console.log(res);