// Longest Palindrome
// ???

const longestPalindrome1 = function (s) {
    const hashset = new Set();

    for (let i in s) {
        if (hashset.has(s[i])) {
            hashset.delete(s[i])
        } else {
            hashset.add(s[i])
        }
    }

    console.log(hashset);
    if (hashset.size <= 1) return s.length;
    return s.length - hashset.size + 1;
}


const longestPalindrome = function (s) {
    let ans = 0;
    const hashMap = new Map()

    for (let char of s) {
        hashMap.set(char, (hashMap.get(char) || 0) + 1)

        if (hashMap.get(char) % 2 === 0) {
            ans += 2;
        }
    }

    return s.length > ans ? ans + 1 : ans;
}

const s = "abccccdd"
const res = longestPalindrome(s)
console.log(res);