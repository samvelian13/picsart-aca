let countingSort = (arr, min, max) => {
    let j = 0
    const count = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }

    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j++] = i
            count[i]--
        }
    }
    return arr;
}

const nums = [2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
const res = countingSort(nums, 1, 9);
console.log(res);
