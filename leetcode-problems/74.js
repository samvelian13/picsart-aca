// Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return false
    }

    let m = matrix[0].length // cols count
    let left = 0
    let right = m * matrix.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let col = mid % m
        let row = parseInt(mid / m)

        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false
}

// const matrix = [[1,1]]
const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target = 30

const res = searchMatrix(matrix, target)
console.log(res);