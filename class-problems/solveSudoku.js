// TC - O(9^E) -E is empty cells, SC -  O(n^2)
function solveSudoku(grid) {
    const n = grid.length // row
    const m = grid[0].length // col

    function isValid(row, col, num) {
        const r = row - row % 3
        const c = col - col % 3

        for (let i = 0; i < n; i++) { // col and row check
            if (grid[row][i] === num || grid[i][col] === num) return false
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[r + i][c + j] === num) return false
            }
        }

        return true
    }

    const backtrack = (row, col) => {
        if (row === n - 1 && col === m) return true
        if (col === m) {
            row++
            col = 0
        }

        if (grid[row][col] !== '.') return backtrack(row, col + 1) // if current cell is set

        for (let num = 1; num <= n; num++) {
            if (isValid(row, col, num.toString())) {
                grid[row][col] = num.toString()
                if (backtrack(row, col + 1)) return true
                grid[row][col] = '.'
            }
        }

        return false
    }

    if (backtrack(0, 0)) {
        console.log('Path found!');
        console.table(grid);
    } else {
        console.log('No path found.');
    }
}

// const grid = [[5, 3, 0, 0, 7, 0, 0, 0, 0], [6, 0, 0, 1, 9, 5, 0, 0, 0], [0, 9, 8, 0, 0, 0, 0, 6, 0], [8, 0, 0, 0, 6, 0, 0, 0, 3], [4, 0, 0, 8, 0, 3, 0, 0, 1], [7, 0, 0, 0, 2, 0, 0, 0, 6], [0, 6, 0, 0, 0, 0, 2, 8, 0], [0, 0, 0, 4, 1, 9, 0, 0, 5], [0, 0, 0, 0, 8, 0, 0, 7, 9]];
const grid = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
solveSudoku(grid)
