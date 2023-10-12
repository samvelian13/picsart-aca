/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0]-b[0])
    let count = 1
    let pos = points[0][1]

    for(let j = 1; j < points.length; j++) {
        if(points[j][0] > pos) {
            count++
            pos = points[j][1]
        }
    }

    return count
};

const points = [[10,16],[2,8],[1,6],[7,12]]
console.log(findMinArrowShots(points));