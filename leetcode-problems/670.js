/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function (num) {
    let str = num.toString()
    let minIndex = str.length - 1
    let maxIndex = str.length - 1

    for (let i = str.length - 2; i >= 0; i--) {
        console.log(str[i], str[maxIndex]);
        if (str[i] < str[maxIndex]) {
            minIndex = i
        } else {
            maxIndex = i
        }
    }

    console.log(str);
    // const tmp = str[minIndex]
    // str[minIndex] = str[maxIndex]
    // str[maxIndex] = tmp
    // console.log(str);

}

const num = 2736
console.log(maximumSwap(num));