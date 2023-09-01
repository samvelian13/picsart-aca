class BinaryHeap {
    #list = []

    constructor(arr) {
        this.size = 0;

        if (arr && arr.length) {
            this.#list = arr;
            this.build()
        }
    }

    build() {
        this.size = this.#list.length
        // console.log(this.#list, '---LIST', Math.floor((this.#list.length / 2) - 1), Math.floor((this.#list.length - 2) / 2));
        // console.log(this.#list, '---LIST');
        for (let i = Math.floor((this.#list.length - 2) / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    heapifyUp(i) {
        let parentIndex = this.#getParent(i);

        while (i > 0 && this.#list[i] > this.#list[parentIndex]) {
            this.#swap(i, parentIndex);
            i = parentIndex;
            parentIndex = this.#getParent(parentIndex);
        }
    }

    heapifyDown(i) {
        let largest = i
        let left = this.#getLeftChild(i)
        let right = this.#getRightChild(i)

        if (left < this.size && this.#list[left] > this.#list[i]) {
            largest = left
        }
        if (right < this.size && this.#list[right] > this.#list[largest]) {
            largest = right
        }

        if (largest !== i) {
            this.#swap(largest, i)
            this.heapifyDown(largest)
        }
    }

    insert(num) {
        this.#list.push(num);
        this.size = this.size + 1
        this.heapifyUp(this.size - 1);
    }

    remove(num) {
        let i = 0;

        while (i < this.size) {
            if (num === this.#list[i])
                break;
            i++
        }

        if (i >= this.size) {
            return
        }

        this.#swap(i, this.size - 1)
        this.size = this.size - 1
        this.heapifyDown(i)
    }

    extractMax() {
        const max = this.#list[0]
        this.remove(max);
        return max;
    }

    sort() {
        // this.build()
        let heapSize  = this.size
        for (let i = this.#list.length - 1; i > 0; i--) {
            this.#swap(0, this.size - 1)
            this.size = this.size - 1
            this.heapifyDown(0);
        }

        this.size = heapSize
    }

    getTop() {
        return this.#list[0]
    }

    getList() {
        return this.#list.slice(0, this.size)
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


// const heap = new BinaryHeap([20, 30, 10, 40, 25])
const heap = new BinaryHeap()
heap.insert(20)
heap.insert(30)
heap.insert(10)
heap.insert(40)
heap.insert(25)

// console.log(heap.getList(), heap.size);
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// heap.sort()
// console.log(heap.getList(), heap.size);
