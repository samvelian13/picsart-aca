// TC - O(4^n*m), SC -  O(n * m)
function solveMaze(maze, start, end) {
    const rows = maze.length;
    const cols = maze[0].length;
    const solution = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    function isValid(i, j) {
        return i >= 0 && i < rows && j >= 0 && j < cols && maze[i][j] === 1
    }

    const backtrack = (i, j) => {
        if (i === end[0] && j === end[1] && maze[i][j] === 1) {
            solution[i][j] = 1
            return true
        }

        if (isValid(i, j)) {
            if (solution[i][j] === 1) return false
            solution[i][j] = 1
            if (backtrack(i + 1, j) ||
                backtrack(i, j + 1) ||
                backtrack(i - 1, j) ||
                backtrack(i, j - 2)) return true

            solution[i][j] = 0
            return false
        }
        return false
    }

    if (backtrack(start[0], start[1])) {
        console.log('Path found!');
        console.table(solution);
    } else {
        console.log('No path found.');
    }
}

const maze = [
    [1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 1]
];

solveMaze(maze, [0, 0], [4, 7])
