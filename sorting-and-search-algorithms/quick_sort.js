function quick_sort(arr, first, last) {
    // if (arr.length <= 1) {
    //     return arr
    // }

    if (first < last) {
        let pivotIndex = partition(arr, first, last)
        quick_sort(arr, first, pivotIndex - 1)
        quick_sort(arr, pivotIndex + 1, last)
    }
}

const partition = function (arr, first, last) {
    let mid = Math.floor((first + last) / 2)

    sortFirstMiddleLast(arr, first, mid, last)
    swap(arr, mid, last - 1)

    let pivotIndex = last - 1
    let pivot = arr[pivotIndex]
    let indexFromLeft = first + 1
    let indexFromRight = last - 2

    while (true) {
        while (arr[indexFromLeft] < pivot) {
            indexFromLeft++
        }

        while (arr[indexFromRight] > pivot) {
            indexFromRight--
        }

        if (indexFromLeft < indexFromRight) {
            swap(arr, indexFromLeft, indexFromRight)
        } else {
            break
        }
    }

    swap(arr, indexFromLeft, pivotIndex)
    return indexFromLeft
}

const sortFirstMiddleLast = function (arr, first, mid, last) {
    if (arr[first] > arr[mid]) {
        swap(arr, first, mid)
    }

    if (arr[mid] > arr[last]) {
        swap(arr, mid, last)
    }

    if (arr[first] > arr[mid]) {
        swap(arr, first, mid)
    }
}

const nums = [2, 5, 6, 4, 13, 3, 12, 19, 6];
// const nums = [5, 8, 6, 4, 9, 3, 7, 1, 2];
const res = quick_sort(nums, 0, nums.length - 1);
console.log(nums);

function swap(items, leftIndex, rightIndex) {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}