export default class Queue {
    constructor() {
        this.data = []
    }

    push(value) {
        this.data.push(value)
    }

    pop() {
        if (!this.isEmpty()) {
            return this.data.shift();
        }
    }

    peek() {
        return this.data[0];
    }

    size() {
        return this.data.length
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.data.length = 0
    }

    print() {
        console.log(this.data.toString())
    }
}
