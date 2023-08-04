import Queue from "./Queue.js";
import Stack from "./Stack.js";

class Graph {
    static UNDIRECTED = Symbol('undirected')
    static DIRECTED = Symbol('directed')
    #adjacencyList
    #edgeDirection

    constructor(edgeDirection = this.constructor.DIRECTED) {
        this.#adjacencyList = new Map()
        this.#edgeDirection = edgeDirection;
    }

    addEdge(source, destination) {
        if (source === null || source === undefined || destination === null || destination === undefined) {
            return
        }
        this.addVertex(source)
        this.addVertex(destination)

        this.#adjacencyList.get(source).add(destination);

        if (this.#edgeDirection === this.constructor.UNDIRECTED) {
            this.#adjacencyList.get(destination).add(source);
        }
    }

    addVertex(v) {
        if (!this.#adjacencyList.has(v)) {
            this.#adjacencyList.set(v, new Set());
        }
    }

    // ?????
    search(s, d) {
        if (!this.#adjacencyList.has(s) || !this.#adjacencyList.has(d)) {
            return false
        }


        for (const v of this.#adjacencyList.get(s)) {
            console.log(d, '==');
            if (v === d) {
                return true
            }
        }

        return false
    }

    dfsIterative(s) {
        const stack = new Stack()
        const result = []
        const visitedMap = new Map()

        stack.push(s)
        visitedMap.set(s, true)

        while (!stack.isEmpty()) {
            const u = stack.pop()
            result.push(u)

            for (const v of this.#adjacencyList.get(u)) {
                if (!visitedMap.has(v)) {
                    visitedMap.set(v, true)
                    stack.push(v)
                }
            }
        }

        return result
    }

    dfsRecursive(source) {
        const result = []
        const visitedMap = new Map();
        const adjacencyList = this.#adjacencyList;

        (function dfs(s) {
            visitedMap.set(s, true)
            result.push(s)

            for (const v of adjacencyList.get(s)) {
                if (!visitedMap.has(v)) {
                    dfs(v)
                }
            }
        })(source)

        return result
    }

    bfs(s) {
        const queue = new Queue()
        const result = []
        const visitedMap = new Map()

        queue.push(s)
        visitedMap.set(s, true)

        while (!queue.isEmpty()) {
            let u = queue.pop()
            result.push(u);

            for (const v of this.#adjacencyList.get(u)) {
                if (!visitedMap.has(v)) {
                    queue.push(v)
                    visitedMap.set(v, true)
                }
            }
        }

        return result
    }

    bfsExtraCase() {
        let count = 0
        const visitedMap = new Map()
        const adjacencyList = this.#adjacencyList;

        for (const v of adjacencyList.keys()) {
            visitedMap.set(v, false)
        }

        for (const v of adjacencyList.keys()) {
            if (!visitedMap.get(v)) {
                bfs(v)
                count++
            }
        }

        function bfs(s) {
            const queue = new Queue()
            queue.push(s)
            visitedMap.set(s, true)

            while (!queue.isEmpty()) {
                let u = queue.pop()

                for (const v of adjacencyList.get(u)) {
                    if (!visitedMap.get(v)) {
                        queue.push(v)
                        visitedMap.set(v, true)
                    }
                }
            }
        }

        return count
    }

    dfsExtraCase() {
        let count = 0
        const visitedMap = new Map()
        const adjacencyList = this.#adjacencyList;

        for (const v of adjacencyList.keys()) {
            visitedMap.set(v, false)
        }

        for (const v of adjacencyList.keys()) {
            if (!visitedMap.get(v)) {
                dfs(v)
                count++
            }
        }

        function dfs(s) {
            visitedMap.set(s, true)
            for (const v of adjacencyList.get(s)) {
                if (!visitedMap.get(v)) {
                    dfs(v)
                }
            }
        }

        return count
    }

    transpose() {
        if (this.#edgeDirection === this.constructor.UNDIRECTED) {
            return
        }

        const transposeGraph = new Graph()
        for (const [v, s] of this.#adjacencyList) {
            for (const u of s) {
                transposeGraph.addEdge(u, v)
            }
        }

        return transposeGraph
    }

    // Cycle detection in an undirected graph
    // Cycle detection in a directed graph
    isCycled() {
        const visitedMap = new Array(this.#adjacencyList.size).fill(false)
        const recStackMap = new Array(this.#adjacencyList.size).fill(false)

        for (const vertex of this.#adjacencyList.keys()) {
            if (!visitedMap[vertex]) {
                if (this.#edgeDirection === Graph.UNDIRECTED) {
                    if (this.isCycledUndirectedUtil(visitedMap, vertex)) {
                        return true
                    }
                } else {
                    if (this.isCycledDirectedUtil(recStackMap, visitedMap, vertex)) {
                        return true
                    }
                }
            }
        }

        return false
    }

    isCycledDirectedUtil(recStackMap, visitedMap, s) {
        visitedMap[s] = true
        recStackMap[s] = true
        for (const neighbour of this.#adjacencyList.get(s)) {
            if (!visitedMap[neighbour]) {
                if (this.isCycledUndirectedUtil(recStackMap, visitedMap, neighbour, s)) {
                    return true
                }
            } else if (recStackMap[neighbour]) {
                return true
            }
        }

        recStackMap[s] = false
        return false
    }

    isCycledUndirectedUtil(visitedMap, s, parent = null) {
        visitedMap[s] = true

        for (const neighbour of this.#adjacencyList.get(s)) {
            if (!visitedMap[neighbour]) {
                if (this.isCycledUndirectedUtil(visitedMap, neighbour, s)) {
                    return true
                }
            } else if (neighbour !== parent) {
                return true
            }
        }

        return false
    }

    // second version ??
    countOfNodesAtAGivenLevel(s, l) {
        const queue = new Queue()
        const visitedMap = new Map()
        const levels = new Array(this.#adjacencyList.size);
        let count = 0;

        queue.push(s)
        visitedMap.set(s, true)
        levels[s] = 0

        while (!queue.isEmpty()) {
            let u = queue.pop()

            if (levels[u] === l) {
                count++
            } else if (levels[u] > l) {
                break
            }

            for (const v of this.#adjacencyList.get(u)) {
                if (!visitedMap.has(v)) {
                    queue.push(v)
                    visitedMap.set(v, true)
                    levels[v] = levels[u] + 1
                }
            }
        }

        return count;
    }

    allPossiblePathsBetween2Vertices(source, destination) {
        const visitedMap = new Array(this.#adjacencyList.size).fill(false)
        const adjacencyList = this.#adjacencyList;
        let count = 0;

        (function dfs(s) {
            visitedMap[s] = true
            if (s === destination) {
                count++
            }

            for (const v of adjacencyList.get(s)) {
                if (!visitedMap[v]) {
                    dfs(v)
                }
            }

            visitedMap[s] = false
        })(source)

        return count
    }

    shortestPathInUnweightedGraph(source, destination) {
        const queue = new Queue()
        const parentsMap = new Array(this.#adjacencyList.size).fill(-1)
        const visitedMap = new Array(this.#adjacencyList.size).fill(false)

        queue.push(source)
        visitedMap[source] = true

        while (!queue.isEmpty()) {
            let u = queue.pop()
            for (const v of this.#adjacencyList.get(u)) {
                if (parentsMap[v] === -1) {
                    parentsMap[v] = u
                }
                if (!visitedMap[v]) {
                    queue.push(v)
                    visitedMap[v] = true
                }

                if (v === destination) {
                    return helper(source, destination)
                }
            }
        }

        function helper(s, d) {
            const res = []
            while (d !== s) {
                res.unshift(d)
                d = parentsMap[d]
            }

            res.unshift(s)
            return res
        }
    }


    print() {
        for (const [vertex, edges] of this.#adjacencyList) {
            console.log(`${vertex} ${this.#edgeDirection === this.constructor.UNDIRECTED ? '<' : ''}-> ${[...edges].join(", ")}`);
        }
    }
}

const gr = new Graph(Graph.UNDIRECTED)
// gr.addEdge(0, 1)
// gr.addEdge(0, 2)
// gr.addEdge(0, 3)
// gr.addEdge(1, 7)
// gr.addEdge(1, 6)
// gr.addEdge(2, 5)
// gr.addEdge(3, 4)
// gr.addEdge(6, 7)
// gr.addEdge(7, 5)
// gr.addEdge(5, 4)
// gr.addEdge(5, 8)
// gr.addEdge(4, 9)
// gr.addEdge(4, 8)
// gr.addEdge(8, 10)
// gr.addEdge(9, 10)

gr.addEdge(0, 1)
gr.addEdge(0, 2)
gr.addEdge(0, 3)
gr.addEdge(1, 5)
gr.addEdge(5, 7)
gr.addEdge(5, 6)
gr.addEdge(3, 4)
gr.addEdge(4, 5)
gr.addEdge(6, 8)

console.log(gr.isCycled());
// gr.print()
