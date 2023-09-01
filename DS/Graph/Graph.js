import Queue from "../Queue/Queue.js";
import Stack from "../Stack/Stack.js";

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
                if (!visitedMap.has(u)) {
                    dfs(u)
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
                inDegree[v] = inDegree[v] !== undefined ? inDegree[v] + 1 : 0
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
                --inDegree[v]
                if (!inDegree[v]) {
                    queue.push(v)
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
                if (this.#edgeDirection === Graph.UNDIRECTED) {
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
            if (!visitedMap[neighbour]) {
                if (this.#isCycledDirectedUtil(recStackMap, visitedMap, neighbour)) {
                    return true
                }
            } else if (recStackMap[neighbour]) {
                return true
            }
        }

        recStackMap[s] = false
        return false
    }

    #isCycledUndirectedUtil(visitedMap, s, parent = null) {
        visitedMap[s] = true

        for (const neighbour of this.#adjacencyList.get(s)) {
            if (!visitedMap[neighbour]) {
                if (this.#isCycledUndirectedUtil(visitedMap, neighbour, s)) {
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
            if (!visitedMap.has(v)) {
                this.#KosarajouDfsUtil(adjacencyList, v, visitedMap, dummyArr)
            }
        }

        dummyArr.push(s)
    }

    #KosarajouFillInOrderHelper(s, visitedMap, stack) {
        visitedMap.set(s, true)

        for (const v of this.#adjacencyList.get(s)) {
            if (!visitedMap.has(v)) {
                this.#KosarajouFillInOrderHelper(v, visitedMap, stack)
            }
        }

        stack.push(s)
    }

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
                if (ids[v] === -1) {
                    tarjanDfsUtil(v, stack, recStack, ids, lowLink, SCC, staticId)
                    lowLink[u] = Math.min(lowLink[u], lowLink[v]) //
                } else if (recStack[v]) {
                    console.log(u, v);
                    console.log(lowLink, ids, '================================');
                    lowLink[u] = Math.min(lowLink[u], lowLink[v])
                }

                // if (ids[v] === -1) {
                //     tarjanDfsUtil(v, stack, recStack, ids, lowLink, SCC, staticId)
                // }
                // if (recStack[v]) {
                //     lowLink[u] = Math.min(lowLink[u], lowLink[v]) //
                // }
            }

            console.log(lowLink, ids);
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

    print() {
        for (const [vertex, edges] of this.#adjacencyList) {
            console.log(`${vertex} ${this.#edgeDirection === this.constructor.UNDIRECTED ? '<' : ''}-> ${[...edges].join(", ")}`);
        }
    }
}

const gr = new Graph(Graph.DIRECTED)
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
// gr.addEdge(1, 4);
// gr.addEdge(1, 3);
// gr.addEdge(4, 5);
//
// console.log(gr.topSort());
// console.log(gr.kahnAlgorithm());
