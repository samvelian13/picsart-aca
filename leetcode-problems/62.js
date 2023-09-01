/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array.from(Array(m), () => Array(n).fill(0))

    console.log(dp)

    // for(let i = m-1; i >= 0; i++) {
    //     for(let j = n - 1; j >= 0; j++) {
    //         if(i === m-1 || j === n-1 ) {
    //             console.log(dp[i][j])
    //             dp[i][j] = 1
    //         } else {
    //             // dp[i][j] = dp[i+1][j] + dp[i][j+1]
    //         }
    //     }
    // }

    // console.log(dp)

    return dp[0][0]
};

const m = 3, n = 7
uniquePaths(m, n)