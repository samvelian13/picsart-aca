// Happy Number
// Floye circle detection technique
// method 1
// method 2 slow fast O(log n)

const isHappy1 = function (n) {
    const hashSet = new Set()

    while (n > 0 && !hashSet.has(n)) {
        hashSet.add(n)
        n = getNext(n)
    }

    return n === 1
}


const getNext = function (n) {
    const num = n.toString()
    let res = 0

    for (let i = 0; i < num.length; i++) {
        res += Math.pow(parseInt(num[i]), 2)
    }

    return res
}


const isHappy = function (n) {
    let slow = n
    let fast = getNext(n)

    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow)
        fast = getNext(getNext(fast));
    }
    return fast === 1;
}

const n = 19
const res = isHappy(n)
console.log(res);