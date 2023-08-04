let radixSort = (arr) => {
    let maxLength = Math.max(...arr)

    if (!maxLength) return false
    maxLength = maxLength.toString().length

    for (let i = 0; i < maxLength; i++) {
        let tmpArr = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let num = getDigit(arr[j], i);

            if (num !== undefined) tmpArr[num].push(arr[j]);
        }

        arr = tmpArr.flat();
    }

    return arr
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

const nums = [11, 30, 17, 41, 15];
const res = radixSort(nums);
console.log(res);
