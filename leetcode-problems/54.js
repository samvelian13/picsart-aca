/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    let start = 0
    let end = 0
    let tmp = []

    for (let i = 0; i < intervals.length; i++) {

        // if (intervals[i][start] > intervals[i - 1][end]) {
        //
        // }
        if (intervals[i][1] >= intervals[i + 1][0]) {

        }
    }
}

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// const res = merge(intervals)
// console.log(res);
