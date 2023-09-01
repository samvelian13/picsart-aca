// Last Stone Weight
/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    stones.sort((a, b) => b - a)

    while (stones.length > 1) {
        const maxVal = stones.shift()
        if (maxVal > stones[0]) {
            stones[0] = maxVal - stones[0]
        } else {
            stones.shift()
        }

        stones.sort((a, b) => b - a)
    }

    return stones.length ? stones[0] : 0
    // while (stones.length > 1) {
    //     stones.sort((a, b) => b - a)
    //     stones[1] = stones[0] - stones[1]
    //     stones.shift()
    // }
}

const stones = [2, 7, 4, 1, 8, 1]
const res = lastStoneWeight(stones)