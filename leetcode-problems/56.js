// Merge Intervals

const merge = function (intervals) {
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    const result = []

    for (const curInterval of intervals) {
        if (!result.length || (result[result.length - 1][1] < curInterval[0])) {
            result.push(curInterval);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], curInterval[1]);
        }
    }

    return result
}

// const intervals = [[1, 4], [0, 2], [3, 5]]
// const intervals = [[1, 4], [2, 3]]
const intervals = [[1, 3], [2, 6], [8, 10], [9, 18]]
// const intervals = [[1, 3], [4, 6], [5, 10], [15, 18]]
// const intervals = [[1, 4], [4, 5]]
const res = merge(intervals)
console.log(res);