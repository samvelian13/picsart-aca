// Find the Town Judge

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(n, trust) {
    if (n === 1 && !trust.length) return 1;
    const arr = new Array(n+1).fill(0)

    for(let [p1, p2] of trust) {
        arr[p1]--;
        arr[p2]++;
    }

    for (let i = 0; i < arr.length; i++)
        if (arr[i] === n - 1)
            return i;

    return -1;
};

// const n = 2, trust = [[1,2]]
const n = 3, trust = [[1,3],[2,3]]
// const n = 4, trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]
console.log(findJudge(n, trust), '---res');