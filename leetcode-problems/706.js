var MyHashMap = function() {
    this.map = {}
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if(this.map.hasOwnProperty(key)) {
        return this.map[key];
    }

    return -1
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if(this.map.hasOwnProperty(key)) {
        delete this.map[key];
    }
    return
};

const myHashMap = new MyHashMap();
myHashMap.put(1, 1)
myHashMap.put(2, 2)
console.log(myHashMap.get(1));
console.log(myHashMap.get(3));
myHashMap.remove(2)
console.log(myHashMap.map);