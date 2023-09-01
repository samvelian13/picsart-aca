var MyHashSet = function () {
    this.capacity = 7
    this.arr = new Array(this.capacity);
    this.loadFactor = 0.2
    this.size = 0
}

MyHashSet.prototype.getCurrentLoadFactor = function () {
    return this.size / this.capacity;
}

MyHashSet.prototype.rehash = function () {
    this.capacity = this.capacity * 2
    let newSet = new MyHashSet()
    newSet.capacity = this.capacity

    this.arr.forEach((item) => {
        if (!item) return
        newSet.add(item)
    })

    this.arr = newSet.arr
    console.log(this.arr);
    newSet = undefined
}

MyHashSet.prototype.hash = function (key) {
    let hash = 0;
    if (typeof key === 'string') {
        for (const s of key) {
            hash = ((hash << 5) - hash) + s.charCodeAt(0);
            hash |= 0
        }

        return hash % this.capacity;
    } else if (typeof key === 'number') {
        return key % this.capacity
    }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (this.arr.length > 0) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === key) return
        }
    }

    this.arr[this.hash(key)] = key
    this.size++


    if (this.getCurrentLoadFactor() > this.loadFactor) {
        this.rehash();
    }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {

}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {

};

var obj = new MyHashSet()
obj.add(4)
obj.add(5)
// obj.add(6)
// obj.remove(5)
// console.log(obj.arr);