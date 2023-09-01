export default class Stack {
    constructor() {
        this.data = []
    }

    push(value) {
        this.data.push(value)
    }

    pop() {
        if (!this.isEmpty()) {
            return this.data.pop()
        }
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    size() {
        return this.data.length;
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