/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = []
    candidates.sort((a, b) => a - b)

    backtrack(candidates, res, [], 0, target)
    return res
};

const backtrack = (candidates, res, tmp, index, target) => {
    if (target === 0) {
        res.push([...tmp])
        return
    }

    for (let i = index; i < candidates.length && target - candidates[i] >= 0; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) {
            continue
        }
        tmp.push(candidates[i])
        backtrack(candidates, res, tmp, i + 1, target - candidates[i])
        tmp.pop()
    }
}

const candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
combinationSum2(candidates, target)