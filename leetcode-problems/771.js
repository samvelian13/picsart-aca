// Jewels and Stones

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
    const hashmap = new Map();
    let count = 0

    for (let i = 0; i < jewels.length; i++) {
        hashmap.set(jewels[i], i);
    }

    for (let i = 0; i < stones.length; i++) {
        if(hashmap.has(stones[i])) count++;
    }

    return count
}

const jewels = "aA", stones = "aAAbbbbCC"
numJewelsInStones(jewels, stones)