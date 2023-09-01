import {Node} from "../DS/LinkedList/SLL.js";

const reverseArrayInPlace = function (arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];

        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr
};

const arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);


function reverseInPlace(a, i, j) {
    let li = i;
    let ri = j;

    while (li < ri) {
        let temp = a[li];
        a[li++] = a[ri];
        a[ri--] = temp;
    }
}

// const arr = Array.from({ length: rows }, () => Array(columns).fill(''));


// DS
// -1. Stack
// 0. Queue
// 1. Dynamic array
// 2. Forward list
// 3. Linked list
// 4. Self-organizing linked list
