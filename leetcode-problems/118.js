// Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    if (numRows === 1) return [[1]]
    const triangle = [[1], [1, 1]]

    for (let i = triangle.length; i < numRows; i++) {
        triangle[i] = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || i === j) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }

    return triangle
}

const numRows = 5
const res = generate(numRows)
console.log(res);