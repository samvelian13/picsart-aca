//  Largest Merge Of Two Strings

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const largestMerge = function (word1, word2) {
    let mergeStr = ''

    if (!word1 || !word2) {
        return word1 + word2
    }

    while (word1 || word2) {
        if (word1 > word2) {
            mergeStr += word1.charAt(0)
            word1 = word1.substring(1)
        } else {
            mergeStr += word2.charAt(0)
            word2 = word2.substring(1)
        }
    }
    return mergeStr
}
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const largestMerge1 = function (word1, word2) {
    console.log(word1, word2, '--');
    debugger
    if (!word1 || !word2) {
        return word1 + word2
    }

    if (word1 > word2){
        return word1[0] + largestMerge(word1.substring(1), word2)
    }

    return word2[0] + largestMerge(word1,word2.substring(1))
}

const word1 = "abcabc", word2 = "abdcaba"
const res = largestMerge(word1, word2)
console.log(res);