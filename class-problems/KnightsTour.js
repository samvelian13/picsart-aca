function solveKnightsTour(n, m) {
    const board = new Array(m)
    const possibleMoveI = [-2, -2, -1, -1, 1, 1, 2, 2]
    const possibleMoveJ = [-1, 1, -2, 2, -2, 2, -1, 1]

    for (let i = 0; i < n; i++) {
        board[i] = []
        for (let j = 0; j < m; j++) {
            board[i][j] = -1
        }
    }

    board[0][0] = 0 // placing knight at cell(0, 0)

    const backtrack = (board, i, j, step) => {
        if (step === n * m) {
            return true
        }

        for (let k = 0; k < 8; k++) {
            const newI = i + possibleMoveI[k]
            const newJ = j + possibleMoveJ[k]

            if (isValidMove(newI, newJ)) {
                board[newI][newJ] = step
                if (backtrack(board, newI, newJ, step + 1)) {
                    return true
                }
                board[newI][newJ] = -1
            }
        }

        return false
    }

    const isValidMove = (i, j) => {
        return i >= 0 && j >= 0 && i < n && j < m && board[i][j] === -1
    }

    if (!backtrack(board, 0, 0, 1)) {
        console.log('Solution does not exist');
    }

    console.table(board)
}

solveKnightsTour(8, 8)