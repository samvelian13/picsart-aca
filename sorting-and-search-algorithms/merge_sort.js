function merge_sort(arr, first = 0, last = arr.length - 1) {
    if (first < last) {
        let mid = Math.floor((first + last) / 2)

        merge_sort(arr, first, mid)
        merge_sort(arr, mid + 1, last)
        merge(arr, first, mid, last)
    }
}

function merge(arr, first, mid, last) {
    let first1 = first
    let last1 = mid
    let first2 = mid + 1
    let last2 = last
    let tmpArr = new Array(arr.length)
    let index = first

    while (first1 <= last1 && first2 <= last2) {
        if (arr[first1] < arr[first2]) {
            tmpArr[index++] = arr[first1++]
        } else {
            tmpArr[index++] = arr[first2++]
        }
    }

    while (first1 <= last1) {
        tmpArr[index++] = arr[first1++];
    }

    while (first2 <= last2) {
        tmpArr[index++] = arr[first2++];
    }

    let k = 0
    while (k < tmpArr.length) {
        if (tmpArr[k] !== undefined) {
            arr[k] = tmpArr[k]
        }
        k++
    }
}

// const nums = [0, 3, 0, 9, 4, 1, 7, 6];
const nums = [38, 27, 43, 3, 9, 82, 10];
merge_sort(nums);
console.log(nums);
