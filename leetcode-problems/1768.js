// Merge Strings Alternately

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = function (word1, word2) {
//     let tmpStr = ''
//     let i = 0
//     let j = 0
//
//     while (i < word1.length || j < word2.length) {
//         if (i < word1.length) {
//             tmpStr += word1[i++]
//         }
//
//         if (j < word2.length) {
//             tmpStr += word2[j++]
//         }
//     }
//
//     return tmpStr
// }
//
// const word1 = "ab", word2 = "pqrs"
// const res = mergeAlternately(word1, word2)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    let tmpStr = ''

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) {
            tmpStr += word1[i]
        }

        if (i < word2.length) {
            tmpStr += word2[i]
        }
    }

    return tmpStr
}

const word1 = "ab", word2 = "pqrs"
const res = mergeAlternately(word1, word2)
// console.log(res);