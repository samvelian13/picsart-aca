// Search a 2D Matrix ||

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return false
    }

    let row = 0, col = matrix[0].length - 1

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true
        }

        if (target <= matrix[row][col]) {
            col--
        } else {
            row++
        }
    }

    return false
}

const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]],
    target = 17

const res = searchMatrix(matrix, target)
console.log(res);