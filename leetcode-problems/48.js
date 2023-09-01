// Rotate Image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < Math.floor(matrix[i].length / 2); j++) {
            swap(matrix[i], j, matrix[i].length - j - 1)
        }
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix)

console.log("-> matrix", matrix);
// [[7,4,1],[8,5,2],[9,6,3]]
