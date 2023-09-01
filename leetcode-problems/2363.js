//  Merge Similar Items

// use map (ordered)

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
const mergeSimilarItems = function (items1, items2) {
    const hashmap = new Map()

    for (let [value, weight] of items1.concat(items2)) {
        if (!hashmap.has(value)) {
            hashmap.set(value, weight)
        } else {
            hashmap.set(value, hashmap.get(value) + weight)
        }
    }

    // for (let i = 0; i < items2.length; i++) {
    //     if (hashmap.has(items2[i][0])) {
    //         hashmap.set(items2[i][0], hashmap.get(items2[i][0]) + items2[i][1])
    //     } else {
    //         hashmap.set(items2[i][0], items2[i][1])
    //     }
    // }

    return [...hashmap].sort((a, b) => a[0] - b[0])
}

// const items1 = [[1, 1], [4, 5], [3, 8]], items2 = [[3, 1], [1, 5]]
const items1 = [[2, 9], [24, 4], [11, 1], [16, 3], [1, 4], [28, 3], [23, 8], [3, 3]],
    items2 = [[7, 6], [12, 7], [9, 5], [22, 4], [6, 3], [17, 1]]
// const items1 = [[1, 3], [2, 2]], items2 = [[7, 1], [2, 2], [1, 4]]
const res = mergeSimilarItems(items1, items2)
console.log(res);