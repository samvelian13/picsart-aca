// 2316. Count Unreachable Pairs of Nodes in an Undirected Graph
import DisjointSetBySize from "../DS/DisjointSets/DisjointSetBySize.js";

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countPairs = function (n, edges) {
    const dSet = new DisjointSetBySize()

    for (let i = 0; i < n; i++) {
        dSet.makeSet(i)
    }

    for (const [u, v] of edges) {
        dSet.union(u, v)
    }

    const components = new Map()
    for (let i = 0; i < n; i++) {
        const parent = dSet.findSet(i)
        components.set(parent, (components.get(parent) || 0) + 1)
    }

    let res = 0
    for (const count of components.values()) {
        res = res + (count * (n - count))
        n = n - count;
    }

    console.log(res);
    return res
};

const n = 7, edges = [[0, 2], [0, 5], [2, 4], [1, 6], [5, 4]]
countPairs(n, edges)
