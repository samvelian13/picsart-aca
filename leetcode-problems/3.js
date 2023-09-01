// Longest Substring Without Repeating Characters
// Sliding window technique

const lengthOfLongestSubstring = function (s) {
    const hashmap = new Map()
    let i = 0
    let j = 0
    let result = 0

    while (j < s.length) {
        let rChar = s[j]
        hashmap.set(rChar, (hashmap.get(rChar) ?? 0)  + 1)

        while (hashmap.get(s[j]) > 1) {
            let lChar = s[i]
            hashmap.set(lChar, hashmap.get(lChar) - 1)
            ++i
        }

        result = Math.max(result, j - i + 1)
        ++j
    }

    return result
}

const s = "abcabcbb"
const res = lengthOfLongestSubstring(s)
console.log(res);