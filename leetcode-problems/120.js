// Triangle
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// Top-Down Solution
// const minimumTotal = function (triangle) {
//     const n = triangle.length
//     const memo = Array.from(Array(n), () => Array(n).fill(-1))
//
//     return dfs(triangle, memo, n, 0, 0)
// };
//
// function dfs(triangle, memo, n, i, j) {
//     if (i === n) return 0
//     if (memo[i][j] !== -1) return memo[i][j]
//     return memo[i][j] = Math.min(triangle[i][j] + dfs(triangle, memo, n, i + 1, j), triangle[i][j] + dfs(triangle, memo, n, i + 1, j + 1))
// }

// Bottom-Up Solution
const minimumTotal = function (triangle) {
    const n = triangle.length
    const dp = Array.from(Array(n), () => Array(n).fill(-1))

    for (let j = 0; j < n; j++) dp[n - 1][j] = triangle[n - 1][j];
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < i + 1; j++) {
            dp[i][j] = Math.min(triangle[i][j] + dp[i + 1][j], triangle[i][j] + dp[i + 1][j + 1])
        }
    }

    return dp[0][0]
};

/*
let n = triangle.length;
let dp = new Array(n).fill(0).map(() => new Array(n).fill(-1));
for (let j = 0; j < n; j++) dp[n - 1][j] = triangle[n - 1][j];
for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < i + 1; j++) {
        let lower_left = triangle[i][j] + dp[i + 1][j];
        let lower_right = triangle[i][j] + dp[i + 1][j + 1];
        dp[i][j] = Math.min(lower_left, lower_right);
    }
}
return dp[0][0];
* */

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
console.log(minimumTotal(triangle));

/*
   2        - i = 0, j = 0
  3 4       - i = 1, j = 1
 6 5 7      - i = 2, j = 2
4 1 8 3     - i = 3, j = 3

                                          ┏━━━┓
                    ╭─────────────────────┨ 2 ┠─────────────────────╮
                    │                     ┗━━━┛                     │
                  ┏━┷━┓                                           ┏━┷━┓
        ╭─────────┨ 3 ┠─────────╮                       ╭─────────┨ 4 ┠─────────╮
        │         ┗━━━┛         │                       │         ┗━━━┛         │
      ┏━┷━┓                   ┏━┷━┓                   ┏━┷━┓                   ┏━┷━┓
╭─────┨ 6 ┠─────╮       ╭─────┨ 5 ┠─────╮       ╭─────┨ 5 ┠─────╮       ╭─────┨ 7 ┠─────╮
│     ┗━━━┛     │       │     ┗━━━┛     │       │     ┗━━━┛     │       │     ┗━━━┛     │
┏━┷━┓           ┏━┷━┓   ┏━┷━┓           ┏━┷━┓   ┏━┷━┓           ┏━┷━┓   ┏━┷━┓           ┏━┷━┓
┃ 4 ┃           ┃ 1 ┃   ┃ 1 ┃           ┃ 8 ┃   ┃ 1 ┃           ┃ 8 ┃   ┃ 8 ┃           ┃ 3 ┃
┗━━━┛           ┗━━━┛   ┗━━━┛           ┗━━━┛   ┗━━━┛           ┗━━━┛   ┗━━━┛           ┗━━━┛
*/