function longestCommonSubstring(w1, w2) {
    const m = w1.length;
    const n = w2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    let maxLength = 0
    let endIndex = 0

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (w1[i - 1] === w2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j]
                    endIndex = i - 1
                }
            } else {
                dp[i][j] = 0
            }
        }
    }

    if (maxLength === 0) {
        return ''
    }

    const startIndex = endIndex - maxLength + 1;
    return w1.substring(startIndex, endIndex + 1);
}

const res = longestCommonSubstring('hish', 'vista')
console.log(res);