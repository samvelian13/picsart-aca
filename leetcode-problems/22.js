/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    backtrack(n, 0, 0,'', res)

    console.log(res);
    return res
};

const backtrack = (n, openedCount, closedCount, curr, res) => {
    if (openedCount === n && closedCount === n ) {
        res.push(curr)
        return
    }

    if(openedCount < n ) {
        backtrack(n, openedCount + 1, closedCount, curr += '(', res)
    }

    if(closedCount < openedCount ) {
        backtrack(n, openedCount, closedCount+ 1, curr += ')', res)
    }
}

const n = 3
generateParenthesis(n)
