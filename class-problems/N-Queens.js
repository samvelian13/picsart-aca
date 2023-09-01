function solveNQueens(n) {
    const board = new Array(n)
    let solutionsCount = 0

    for (let i = 0; i < n; i++) {
        board[i] = []
        for (let j = 0; j < n; j++) {
            board[i][j] = 0
        }
    }

    function backtrack(row) {
        if (row === n) {
            solutionsCount++
            return
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 1
                backtrack(row + 1)
                board[row][col] = 0
            }
        }
    }

    function isValid(row, col) {
        for (let i = 0; i < row; i++) { // column check
            if (board[i][col] === 1) return false
        }

        // Check the upper left diagonal
        let i = row - 1, j = col - 1
        while (i >= 0 && j >= 0) {
            if (board[i--][j--] === 1) return false
        }

        // Check the upper right diagonal
        i = row - 1
        j = col + 1
        while (i >= 0 && j < n) { // right top check
            if (board[i--][j++] === 1) return false
        }

        return true

    }

    backtrack(0)

    return solutionsCount
}

console.log(solveNQueens(4));