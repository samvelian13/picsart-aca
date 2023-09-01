const firstUniqChar = function(s) {
    let hashmap = new Map()

    for (let i in s) {
        hashmap.set(s[i], (hashmap.get(s[i]) ?? 0) + 1 )
    }

    for (let i in s) {
        if(hashmap.get(s[i]) === 1) {
            return i
        }
    }

    return -1
}

// const s = "loveleetcode"
const s = "leetcode"
const res = firstUniqChar(s)
console.log(res);