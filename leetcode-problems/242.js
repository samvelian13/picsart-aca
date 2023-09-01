// Valid Anagram


const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    const counter = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 97]++;
        counter[t.charCodeAt(i) - 97]--;
    }

    // for (let i = 0; i < t.length; i++) {
    //     counter[t.charCodeAt(i) - 97]--;
    // }

    for (let i = 0; i < 26; i++) {
        if (counter[i] !== 0) return false;
    }
    return true;
}

const s = "anagram", t = "nagaram"
const res = isAnagram(s, t)
console.log(res);