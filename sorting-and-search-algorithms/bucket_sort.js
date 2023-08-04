let bucketSort = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const bucketSize = 5
    const buckets = Array.from(
        { length: Math.floor((max - min) / bucketSize) + 1 },
        () => []
    )
    console.log(buckets);

    // for (let i = 0; i < arr.length; i++) {
    //     buckets[arr[i]].push(arr[i])
    // }
    //
    // let index = 0;
    // for (let i = 0; i < buckets.length; i++) {
    //     for (let j = 0; j < buckets[i].length; j++) {
    //         console.log(index, '==');
    //         arr[index++] = buckets[i][j]
    //     }
    // }
}


// const nums = [2, 2, 1, 3, 3, 4, 21, 5];
const nums = [12, 6, 37, 29, 11, 33, 21, 22];
const res = bucketSort(nums);
// console.log(nums);
