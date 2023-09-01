// class Queue {
//     constructor() {
//         this.data = []
//     }

//     push(value) {
//         this.data.push(value)
//     }

//     pop() {
//         if (!this.isEmpty()) {
//             return this.data.shift();
//         }
//     }

//     peek() {
//         return this.data[0];
//     }

//     size() {
//         return this.data.length
//     }

//     isEmpty() {
//         return this.size() === 0;
//     }

//     clear() {
//         this.data.length = 0
//     }

//     print() {
//         console.log(this.data.toString())
//     }
// }


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Array(numCourses)
    const inDegree = new Array(numCourses).fill(0)

    for(let i = 0; i < graph.length; i++) {
        graph[i] = []
    }

    for(let edge of prerequisites) {
        graph[edge[0]].push(edge[1])
        ++inDegree[edge[1]]
    }

    const queue = new Queue()
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            queue.push(i)
        }
    }

    let visitedNodesCount = 0

    while(!queue.isEmpty()) {
        const u  = queue.pop()

        visitedNodesCount++
        for (let v of graph[u]) {
            --inDegree[v]
            if(!inDegree[v]) {
                queue.push(v)
            }
        }

        if(!visitedNodesCount !== graph.length-1) {
            return false
        }
    }

    return true
};

