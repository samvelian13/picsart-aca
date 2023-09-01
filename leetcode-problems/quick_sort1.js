function quickSort(arr) {
    recQuickSort(arr, 0, arr.length - 1);
}

function recQuickSort(arr, left, right) {
    const size = right - left + 1;

    if (size <= 3) {
        manualSort(arr, left, right);
    } else {
        const median = medianOf3(arr, left, right);
        const partition = partitionIt(arr, left, right, median);
        recQuickSort(arr, left, partition - 1);
        recQuickSort(arr, partition + 1, right);
    }
}

function medianOf3(arr, left, right) {
    const center = (left + right) / 2;
    // order left & center
    if (arr[left] > arr[center]) swap(arr, left, center);
    // order left & right
    if (arr[left] > arr[right]) swap(arr, left, right);
    // order center & right
    if (arr[center] > arr[right]) swap(arr, center, right);

    swap(arr, center, right - 1); // put pivot on right
    return arr[right - 1]; // return median value
}

function swap(arr, dex1, dex2) {
    const temp = arr[dex1];
    arr[dex1] = arr[dex2];
    arr[dex2] = temp;
}

function partitionIt(arr, left, right, pivot) {
    let leftPtr = left; // right of first elem
    let rightPtr = right - 1; // left of pivot

    console.log(leftPtr, rightPtr, '---');
    while (true) {
        //       find bigger
        while (arr[++leftPtr] < pivot) ;
        //       find smaller
        while (arr[--rightPtr] > pivot) ;
        if (leftPtr >= rightPtr) // if pointers cross, partition done
            break; else
            // not crossed, so
            swap(arr, leftPtr, rightPtr); // swap elements
    }
    swap(arr, leftPtr, right - 1); // restore pivot
    return leftPtr; // return pivot location
}

function manualSort(arr, left, right) {
    const size = right - left + 1;
    if (size <= 1) return; // no sort necessary
    if (size === 2) { // 2-sort left and right
        if (arr[left] > arr[right]) swap(arr, left, right);
        return;
    } else // size is 3
    { // 3-sort left, center, & right
        if (arr[left] > arr[right - 1]) swap(arr, left, right - 1); // left, center
        if (arr[left] > arr[right]) swap(arr, left, right); // left, right
        if (arr[right - 1] > arr[right]) swap(arr, right - 1, right); // center, right
    }
}


const nums = [5, 8, 6, 4, 9, 3, 7, 1, 2];
const res = quickSort(nums);
console.log(nums);