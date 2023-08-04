function quickSort(arr, first = 0, last = arr.length - 1) {
    if (arr.length <= 1) {
        return arr
    }

    if (first < last) {
        let pivotIndex = partition(arr, first, last)
        quickSort(arr, first, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, last)
    }
}

const partition = function (arr, first, last) {
    const randomPivotIndex = randomIntFromInterval(first, last)

    if (randomPivotIndex !== last) {
        swap(arr, randomPivotIndex, last)
    }

    const pivotIndex = last
    let i = first
    let j = pivotIndex - 1

    while (true) {
        while (arr[i] < arr[pivotIndex]) {
            i++
        }

        while (arr[j] >= arr[pivotIndex]) {
            j--
        }

        if (i >= j) {
            break
        }
        swap(arr, i, j)
    }

    swap(arr, i, pivotIndex)
    return i
}

// const nums = [2, 5, 6, 4, 13, 3, 12, 19, 6];
const nums = [38, 27, 43, 10, 9, 82, 3];
quickSort(nums);
console.log(nums);

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}