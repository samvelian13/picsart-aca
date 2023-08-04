class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
    }
}

export default class MaxPriorityQueue {
    #list = []
    #size = 0

    constructor(arr) {
        if (arr && arr.length) {
            this.#list = arr;
            this.#build()
        }
    }

    #build() {
        this.#size = this.#list.length
        for (let i = Math.floor((this.#size - 2) / 2); i >= 0; i--) {
            this.#heapifyDown(i);
        }
    }

    #heapifyUp(i) {
        let parentIndex = this.#getParent(i);

        while (i > 0 && this.#list[i].key > this.#list[parentIndex].key) {
            this.#swap(i, parentIndex);
            i = parentIndex;
            parentIndex = this.#getParent(parentIndex);
        }
    }

    #heapifyDown(i) {
        let largest = i
        let left = this.#getLeftChild(i)
        let right = this.#getRightChild(i)

        if (left < this.#size && this.#list[left].key > this.#list[i].key) {
            largest = left
        }
        if (right < this.#size && this.#list[right].key > this.#list[largest].key) {
            largest = right
        }

        if (largest !== i) {
            this.#swap(largest, i)
            this.#heapifyDown(largest)
        }
    }

    insert(key, val) {
        const newNode = new Node(key, val);
        this.#list.push(newNode);
        this.#size = this.#size + 1
        this.#heapifyUp(this.#size - 1);

        return newNode
    }

    extractMax() {
        if (!this.#size) {
            return
        }
        const max = this.#list[0]
        this.remove(max);
        return max;
    }

    remove(item) {
        let i = 0;

        while (i < this.#size) {
            if (item === this.#list[i])
                break;
            i++
        }

        if (i >= this.#size) {
            return
        }

        this.#swap(i, this.#size - 1)
        this.#size = this.#size - 1
        this.#heapifyDown(i)
    }

    sort() {
        let heapSize = this.#size
        for (let i = this.#list.length - 1; i > 0; i--) {
            this.#swap(0, this.#size - 1)
            this.#size = this.#size - 1
            this.#heapifyDown(0);
        }

        this.#size = heapSize
    }

    getTop() {
        return this.#list[0]
    }

    getList() {
        return this.#list.slice(0, this.#size)
    }

    update(i, key) {
        if (key === this.#list[i].key) return

        this.#list[i].key = key

        if (key > this.#list[i].key) {
            this.#heapifyUp(i);
        } else {
            this.#heapifyDown(i);
        }
    }

    isEmpty() {
        return this.#size === 0
    }

    #getParent(i) {
        return Math.floor((i - 1) / 2)
    }

    #getLeftChild(i) {
        return i * 2 + 1
    }

    #getRightChild(i) {
        return i * 2 + 2
    }

    #swap(i, j) {
        [this.#list[i], this.#list[j]] = [this.#list[j], this.#list[i]];
    }
}

// const heap = new MaxPriorityQueue()
// heap.insert(20, 'A')
// heap.insert(30, 'A')
// heap.insert(10, 'A')
// heap.insert(40, 'A')
// heap.insert(25, 'A')
//
// console.log(heap.isEmpty());
// heap.update(0, 22)
// heap.sort()
// const {key, val} = heap.extractMax()
// console.log(key, val);

// heap.remove(removeNode)
// console.log(heap.getList(), heap.#size);
// const {key, val} = heap.extractMax()
// const [key, val] = heap.extractMax()
// console.log(key, val);

// console.log(heap.extractMax())
// console.log(heap.extractMax())
// console.log(heap.extractMax())
// console.log(heap.extractMax())
