// Set Matrix Zeroes

const setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let flag = false

    for (let i = 0; i < m; i++) {
        if (!matrix[i][0]) {
            flag = true
        }

        for (let j = 1; j < n; j++) {
            if (!matrix[i][j]) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }


    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (!matrix[i][0] || !matrix[0][j]) {
                matrix[i][j] = 0
            }
        }
    }

    if (!matrix[0][0]) {
        for (let i = 1; i < n; i++) {
            matrix[0][i] = 0
        }
    }

    if (flag) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0
        }
    }

    console.log(matrix);
}

const matrix = [[0, 1]]
// const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
// const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
const res = setZeroes(matrix)
// console.log(res);