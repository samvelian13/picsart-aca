// 1319.Number of Operations to Make Network Connected
const makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1

    const graph = new Map()
    const visited = new Array(n).fill(false)
    let connectedComponents = 0

    for (const [u, v] of connections) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        if (!graph.has(v)) {
            graph.set(v, []);
        }

        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            connectedComponents++
            dfs(graph, visited, i)
        }

    }

    console.log(connectedComponents, '-connectedComponents')
    return connectedComponents - 1
};

function dfs(graph, visited, s) {
    if (!graph.has(s)) return
    visited[s] = true

    for (const v of graph.get(s)) {
        if (!visited[v]) {
            dfs(graph, visited, v)
        }
    }
}

// const n = 4, connections = [[0, 1], [0, 2], [1, 2]]
const n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
console.log(makeConnected(n, connections));