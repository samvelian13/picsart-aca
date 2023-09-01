class Stack {
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

/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function (s) {
    const stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*' ) {
            stack.pop()
        }else {
            stack.push(s[i])
        }
    }

    return stack.data.join('')
}

/**
 * @param {string} s
 * @return {string}
 */
const removeStarsArr = function (s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*' ) {
            stack.pop()
        }else {
            stack.push(s[i])
        }
    }

    return stack.join('')
}
const str = "leet**cod*e"
const res = removeStars(str)
console.log(res);

