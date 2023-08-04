import Queue from "./Queue.js";
import Stack from "./Stack.js";
import MinPriorityQueue from "./MinPriorityQueue.js";
import DisjointSetBySize from "./DisjointSetBySize.js";

class Graph_Weighted {
    static UNDIRECTED = Symbol('undirected')
    static DIRECTED = Symbol('directed')
    #adjacencyList
    #edgeDirection

    constructor(edgeDirection = this.constructor.DIRECTED) {
        this.#adjacencyList = new Map()
        this.#edgeDirection = edgeDirection;
    }

    addEdge(source, destination, w = 0) {
        if (source === null || source === undefined || destination === null || destination === undefined) {
            return
        }
        this.addVertex(source)
        this.addVertex(destination)

        this.#adjacencyList.get(source).add([destination, w]);

        if (this.#edgeDirection === this.constructor.UNDIRECTED) {
            this.#adjacencyList.get(destination).add([source, w]);
        }
    }

    addVertex(v) {
        if (!this.#adjacencyList.has(v)) {
            this.#adjacencyList.set(v, new Set());
        }
    }

    dfsIterative(s) {
        if (s === undefined || s === null) return
        const stack = new Stack()
        const result = []
        const visitedMap = new Map()

        stack.push(s)
        visitedMap.set(s, true)

        while (!stack.isEmpty()) {
            const u = stack.pop()
            result.push(u)

            for (const v of this.#adjacencyList.get(u)) {
                if (!visitedMap.has(v[0])) {
                    visitedMap.set(v[0], true)
                    stack.push(v[0])
                }
            }
        }

        return result
    }

    dfsRecursive(source) {
        if (source === undefined || source === null) return

        const result = []
        const visitedMap = new Map();
        const adjacencyList = this.#adjacencyList;

        (function dfs(s) {
            visitedMap.set(s, true)
            result.push(s)
            for (const v of adjacencyList.get(s)) {
                if (!visitedMap.has(v[0])) {
                    dfs(v[0])
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
                if (!visitedMap.has(v[0])) {
                    queue.push(v[0])
                    visitedMap.set(v[0], true)
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
                    if (!visitedMap.get(v[0])) {
                        queue.push(v[0])
                        visitedMap.set(v[0], true)
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
                if (!visitedMap.get(v[0])) {
                    dfs(v[0])
                }
            }
        }

        return count
    }

    transpose() {
        if (this.#edgeDirection === this.constructor.UNDIRECTED) {
            return
        }

        const transposeGraph = new Graph_Weighted()
        for (const [v, s] of this.#adjacencyList) {
            for (const u of s) {
                transposeGraph.addEdge(u[0], v)
            }
        }

        return transposeGraph
    }

    // Not possible if we have cycle in Graph
    topSort() {
        const visitedMap = new Map()
        const adjacencyList = this.#adjacencyList
        const res = []

        for (const v of this.#adjacencyList.keys()) {
            if (!visitedMap.has(v)) {
                dfs(v)
            }
        }

        function dfs(v) {
            visitedMap.set(v, true)

            for (const u of adjacencyList.get(v)) {
                if (!visitedMap.has(u[0])) {
                    dfs(u[0])
                }
            }

            res.unshift(v)
        }

        return res
    }

    kahnAlgorithm() {
        const queue = new Queue()
        const inDegree = new Array(this.#adjacencyList.size).fill(0)
        const inOrder = new Array(this.#adjacencyList.size)

        for (const [, u] of this.#adjacencyList) {
            for (const v of u) {
                inDegree[v[0]] = inDegree[v[0]] !== undefined ? inDegree[v[0]] + 1 : 0
            }
        }

        for (let i = 0; i < inDegree.length; i++) {
            if (!inDegree[i]) {
                queue.push(i)
            }
        }

        let index = 0
        while (!queue.isEmpty()) {
            const u = queue.pop()

            if (!this.#adjacencyList.has(u)) {
                continue
            }

            inOrder[index++] = u
            for (const v of this.#adjacencyList.get(u)) {
                --inDegree[v[0]]
                if (!inDegree[v[0]]) {
                    queue.push(v[0])
                }
            }
        }

        if (index !== this.#adjacencyList.size) {
            return false
        }

        return inOrder
    }

    isCycled() {
        const visitedMap = new Array(this.#adjacencyList.size).fill(false)
        const recStackMap = new Array(this.#adjacencyList.size).fill(false)

        for (const vertex of this.#adjacencyList.keys()) {
            if (!visitedMap[vertex]) {
                if (this.#edgeDirection === Graph_Weighted.UNDIRECTED) {
                    if (this.#isCycledUndirectedUtil(visitedMap, vertex)) {
                        return true
                    }
                } else {
                    if (this.#isCycledDirectedUtil(recStackMap, visitedMap, vertex)) {
                        return true
                    }
                }
            }
        }

        return false
    }

    #isCycledDirectedUtil(recStackMap, visitedMap, s) {
        visitedMap[s] = true
        recStackMap[s] = true
        for (const neighbour of this.#adjacencyList.get(s)) {
            if (!visitedMap[neighbour[0]]) {
                if (this.#isCycledDirectedUtil(recStackMap, visitedMap, neighbour[0])) {
                    return true
                }
            } else if (recStackMap[neighbour[0]]) {
                return true
            }
        }

        recStackMap[s] = false
        return false
    }

    #isCycledUndirectedUtil(visitedMap, s, parent = null) {
        visitedMap[s] = true

        for (const neighbour of this.#adjacencyList.get(s)) {
            if (!visitedMap[neighbour[0]]) {
                if (this.#isCycledUndirectedUtil(visitedMap, neighbour[0], s)) {
                    return true
                }
            } else if (neighbour[0] !== parent) {
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
                const vertex = v[0]
                if (!visitedMap.has(vertex)) {
                    queue.push(vertex)
                    visitedMap.set(vertex, true)
                    levels[vertex] = levels[u] + 1
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
                if (!visitedMap[v[0]]) {
                    dfs(v[0])
                }
            }

            visitedMap[s] = false
        })(source)

        return count
    }

    /* Unweighted graph implementation */
    shortestPathInGraph(source, destination) {
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

    /* SCC */
    kosarajouAlgorithm() {
        let visitedMap = new Map();
        const stack = new Stack()
        const SCC = []

        for (const u of this.#adjacencyList.keys()) {
            if (!visitedMap.has(u)) {
                this.#KosarajouFillInOrderHelper(u, visitedMap, stack)
            }
        }

        visitedMap.clear()
        const transposedGraph = this.transpose()
        if (!transposedGraph) return

        while (!stack.isEmpty()) {
            const v = stack.pop()

            if (!visitedMap.has(v)) {
                const dummyArr = [];
                this.#KosarajouDfsUtil(transposedGraph.#adjacencyList, v, visitedMap, dummyArr)
                SCC.push(dummyArr)
            }
        }

        return SCC
    }

    #KosarajouDfsUtil(adjacencyList, s, visitedMap, dummyArr) {
        visitedMap.set(s, true)

        for (const v of adjacencyList.get(s)) {
            if (!visitedMap.has(v[0])) {
                this.#KosarajouDfsUtil(adjacencyList, v[0], visitedMap, dummyArr)
            }
        }

        dummyArr.push(s)
    }

    #KosarajouFillInOrderHelper(s, visitedMap, stack) {
        visitedMap.set(s, true)

        for (const v of this.#adjacencyList.get(s)) {
            if (!visitedMap.has(v[0])) {
                this.#KosarajouFillInOrderHelper(v[0], visitedMap, stack)
            }
        }

        stack.push(s)
    }

    /* SCC */
    tarjanAlgorithm() {
        const adjacencyList = this.#adjacencyList
        const stack = new Stack()
        const recStack = new Array(this.#adjacencyList.size).fill(false)
        const ids = new Array(this.#adjacencyList.size).fill(-1)
        const lowLink = new Array(this.#adjacencyList.size).fill(0)
        const SCC = []
        let staticId = 0

        for (const v of this.#adjacencyList.keys()) {
            if (ids[v] === -1) {
                tarjanDfsUtil(v)
            }
        }

        function tarjanDfsUtil(u) {
            stack.push(u)
            recStack[u] = true
            ids[u] = lowLink[u] = staticId++

            for (const v of adjacencyList.get(u)) {
                const vertex = v[0]
                // if (ids[vertex] === -1) {
                //     tarjanDfsUtil(vertex, stack, recStack, ids, lowLink, SCC, staticId)
                //     lowLink[u] = Math.min(lowLink[u], lowLink[vertex]) //
                // } else if (recStack[vertex]) {
                //     lowLink[u] = Math.min(lowLink[u], lowLink[vertex])
                // }

                if (ids[vertex] === -1) {
                    tarjanDfsUtil(vertex, stack, recStack, ids, lowLink, SCC, staticId)
                }
                if (recStack[v]) {
                    lowLink[u] = Math.min(lowLink[u], lowLink[vertex]) //
                }
            }

            if (lowLink[u] === ids[u]) {
                const tmp = []
                while (true) {
                    let vertex = stack.pop()
                    recStack[vertex] = false
                    tmp.push(vertex)

                    if (vertex === u) {
                        break
                    }
                }

                SCC.push(tmp)
            }
        }

        return SCC
    }


    /* Single source shortest path SSSP */
    singleSourceShortestPath(s) {
        const inOrder = this.kahnAlgorithm()

        if (!inOrder) return 'SSSP is working only for DAG\'s'

        const distance = new Array(this.#adjacencyList.size).fill(Infinity)
        distance[0] = 0

        for (const i of this.#adjacencyList.keys()) {
            const u = inOrder[i]
            if (distance[u] !== Infinity) {
                for (const v of this.#adjacencyList.get(u)) {
                    if (distance[v[0]] > distance[u] + v[1]) {
                        distance[v[0]] = distance[u] + v[1]
                    }
                }
            }
        }

        return distance;
    }

    bellmanFord(source) {
        const distance = new Array(this.#adjacencyList.size).fill(Number.MAX_SAFE_INTEGER)
        distance[source] = 0

        for (let i = 0; i < this.#adjacencyList.size - 1; i++) {
            for (const [u, edges] of this.#adjacencyList) {
                for (const [v, w] of edges) {
                    if (distance[u] !== Number.MAX_SAFE_INTEGER && distance[u] + w < distance[v]) {
                        distance[v] = distance[u] + w
                    }
                }
            }
        }

        for (let i = 0; i < this.#adjacencyList.size - 1; i++) {
            for (const [u, edges] of this.#adjacencyList) {
                for (const [v, w] of edges) {
                    if (distance[u] !== Number.MAX_SAFE_INTEGER && distance[u] + w < distance[v]) {
                        distance[v] = Number.MIN_SAFE_INTEGER
                    }
                }
            }
        }

        return distance
    }

    dijkstra(source) {
        const visitedMap = new Map()
        const distance = new Array(this.#adjacencyList.size).fill(Infinity)
        const pq = new MinPriorityQueue()

        distance[source] = 0
        pq.insert(0, source)

        while (!pq.isEmpty()) {
            const {key: cost, val: u} = pq.extractMin()

            if (cost > distance[u]) {
                continue
            }
            visitedMap.set(u, true)


            // Relaxing all neighbours of U
            for (const [v, w] of this.#adjacencyList.get(u)) {
                if (!visitedMap.has(v)) {
                    const newDistance = cost + w

                    if (newDistance < distance[v]) {
                        distance[v] = newDistance
                        pq.insert(distance[v], v)
                    }
                }
            }
        }

        return distance
    }

    /* MST */
    primAlgo(source) {
        const pq = new MinPriorityQueue()
        const visitedMap = new Map()
        const mstEdges = new Map();
        let mstWeight = 0;

        pq.insert(0, source)

        while (!pq.isEmpty()) {
            const {key: cost, val: u} = pq.extractMin()

            if (visitedMap.has(u)) {
                continue
            }
            visitedMap.set(u, true)
            mstWeight += cost

            for (const [v, w] of this.#adjacencyList.get(u)) {
                if (!visitedMap.has(v)) {
                    pq.insert(w, v)
                    mstEdges.set(v, [u, w]); // Store the edge [v, weight] in the MST map
                }
            }
        }

        return {cost: mstWeight, edges: mstEdges};
    }

    kruskalAlgo() {
        const pq = new MinPriorityQueue()
        const dSet = new DisjointSetBySize()
        let cost = 0
        const mstEdges = []

        for (const [u, edges] of this.#adjacencyList) {
            for (const [v, w] of edges) {
                pq.insert(w, [u, v])
            }
            dSet.makeSet(u)
        }

        while (!pq.isEmpty()) {
            const {key: w, val: [u, v]} = pq.extractMin()

            if (dSet.union(u, v)) {
                cost += w
                mstEdges.push([u, v, w]); // Add edge to MST
            }
        }

        return {cost, edges: mstEdges};
    }

    print() {
        for (const [u, edges] of this.#adjacencyList) {
            for (const [v, w] of edges) {
                console.log(`${u} ${this.#edgeDirection === this.constructor.UNDIRECTED ? '<' : ''}-> ${v} weight--> ${w}`);
            }
        }
    }
}

const gr = new Graph_Weighted(Graph_Weighted.UNDIRECTED)
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

/* Cycle detection test*/
// gr.addEdge(0, 1)
// gr.addEdge(0, 2)
// gr.addEdge(0, 3)
// gr.addEdge(1, 5)
// gr.addEdge(5, 7)
// gr.addEdge(5, 6)
// gr.addEdge(3, 4)
// gr.addEdge(4, 5)
// gr.addEdge(6, 8)
// console.log(gr.isCycled());

/* Topological sorting tests */
// gr.addEdge(0, 2)
// gr.addEdge(1, 0)
// gr.addEdge(1, 3)
// gr.addEdge(2, 4)
// gr.addEdge(2, 7)
// gr.addEdge(3, 2)
// gr.addEdge(4, 5)
// gr.addEdge(5, 6)
// gr.addEdge(7, 5)
// gr.addEdge(7, 8)
// gr.addEdge(8, 6)
// gr.addEdge(8, 9)
// gr.addEdge(10, 8)
// gr.addEdge(11, 8)
// gr.addEdge(11, 10)
// gr.addEdge(12, 11)
// gr.addEdge(12, 2)
// gr.addEdge(12, 0)

// console.log(gr.topSort());

/* kahn's algorithm */
// gr.addEdge(0, 1)
// gr.addEdge(0, 4)
// gr.addEdge(1, 6)
// gr.addEdge(2, 6)
// gr.addEdge(3, 7)
// gr.addEdge(4, 6)
// gr.addEdge(4, 7)
// gr.addEdge(5, 6)
// gr.addEdge(6, 7)
//
// console.log(gr.topSort());
// console.log(gr.kahnAlgorithm());

/* Kosarajou's algorithm test */
// gr.addEdge(0, 2)
// gr.addEdge(2, 1)
// gr.addEdge(1, 0)
// gr.addEdge(2, 3)
// gr.addEdge(3, 6)
// gr.addEdge(1, 4)
// gr.addEdge(4, 5)
// gr.addEdge(5, 4)
// gr.addEdge(5, 6)
// console.log(gr.kosarajouAlgorithm());

/* Tarjan's Algorithm */
// gr.addEdge(1, 0);
// gr.addEdge(0, 2);
// gr.addEdge(2, 1);
// gr.addEdge(0, 3);
// gr.addEdge(3, 4);
//
// console.log(gr.tarjanAlgorithm());

// gr.addEdge(3, 2);
// gr.addEdge(2, 1);
// gr.addEdge(1, 3);
// gr.addEdge(1, 4);
// gr.addEdge(4, 5);
//
// console.log(gr.tarjanAlgorithm());

/* SSSP */
// gr.addEdge(0, 1, 3);
// gr.addEdge(0, 2, 5);
// gr.addEdge(1, 2, 2);
// gr.addEdge(2, 1, 1);
// gr.addEdge(1, 3, 6);
// gr.addEdge(2, 3, 4);
// gr.addEdge(2, 4, 6);
// gr.addEdge(3, 4, 2);
// gr.addEdge(4, 3, 7);
// gr.addEdge(4, 0, 3);
// console.log(gr.singleSourceShortestPath(0));


/* SSSP Dijkstra Algo */
// gr.addEdge(0, 2, 3);
// gr.addEdge(0, 4, 8);
//
// gr.addEdge(1, 2, 4);
// gr.addEdge(1, 3, 8);
// gr.addEdge(1, 6, 4);
//
// gr.addEdge(2, 0, 3);
// gr.addEdge(2, 1, 4);
// gr.addEdge(2, 4, 3);
// gr.addEdge(2, 5, 2);
// gr.addEdge(2, 6, 9);
//
// gr.addEdge(3, 1, 8);
//
// gr.addEdge(4, 0, 8);
// gr.addEdge(4, 2, 3);
// gr.addEdge(4, 7, 8);
//
// gr.addEdge(5, 2, 2);
// gr.addEdge(5, 6, 1);
// gr.addEdge(5, 7, 2);
//
// gr.addEdge(6, 1, 4);
// gr.addEdge(6, 2, 9);
// gr.addEdge(6, 5, 1);
//
// gr.addEdge(7, 4, 8);
// gr.addEdge(7, 5, 2);
// console.log(gr.dijkstra(0));

// gr.addEdge(0, 1, 10);
// gr.addEdge(1, 3, 1);
// gr.addEdge(2, 1, 4);
// gr.addEdge(3, 4, 3);
// gr.addEdge(4, 2, -10);
// gr.addEdge(4, 5, 22);
//
// console.log(gr.bellmanFord(0));


/* MST */
/* Prime, Kruskal */
// gr.addEdge(0, 2, 75);
// gr.addEdge(0, 1, 9);
// gr.addEdge(2, 1, 95);
// gr.addEdge(2, 3, 51);
// gr.addEdge(1, 3, 19);
// gr.addEdge(1, 4, 42);
// gr.addEdge(3, 4, 31);
//
// const mstResult = gr.primAlgo(0);
// console.log("Minimum Spanning Tree edges:");
// for (const [v, [u, w]] of mstResult.edges) {
//     console.log(`(${u} - ${v}): ${w}`);
// }
// console.log("Total cost of MST:", mstResult.cost);

// const mstResult = gr.kruskalAlgo();
// console.log("Minimum Spanning Tree edges:");
// for (const [u, v, w] of mstResult.edges) {
//     console.log(`(${u} - ${v}): ${w}`);
// }
// console.log("Total cost of MST:", mstResult.cost);