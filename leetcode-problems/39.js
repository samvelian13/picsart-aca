// 39. Combination Sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = []
    candidates.sort((a, b) => a - b)

    const backtrack = (res, tmp, i, target) => {
        if (target === 0) {
            console.log('--------------------------------------------------res', tmp);
            res.push([...tmp])
            return
        }

        console.log(i, target, tmp);
        for (; i < candidates.length && target - candidates[i]>= 0; i++) {
            tmp.push(candidates[i])
            backtrack(res, tmp, i, target - candidates[i])
            console.log(i, target, tmp, '---------------');

            tmp.pop()
        }
    }

    backtrack(res, [], 0, target)
    return res
}

const candidates = [2, 3, 6, 7], target = 7
const res = combinationSum(candidates, target)
console.log(res);