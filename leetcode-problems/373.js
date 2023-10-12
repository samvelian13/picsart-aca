import MinPriorityQueue from "../DS/Heap/MinPriorityQueue.js";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    if (!nums1.length || !nums2.length) return [];

    const minHeap = new MinPriorityQueue();
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        minHeap.insert(nums1[i] + nums2[0], [i, 0]);
    }

    while (k > 0 && !minHeap.isEmpty()) {
        console.log(minHeap.getList(), '----');

        const {val: [i, j]} = minHeap.extractMin();
        result.push([nums1[i], nums2[j]]);

        console.log(i, j, '===', j + 1 < nums2.length);
        if (j + 1 < nums2.length) {
            minHeap.insert(nums1[i] + nums2[j + 1], [i, j + 1]);
        }

        k--;
    }

    console.log(result, '--result');
    return result;
};


const nums1 = [1, 7, 11], nums2 = [2, 4, 6], k = 3
// const nums1 = [1, 1, 2], nums2 = [1, 2, 3], k = 2
kSmallestPairs(nums1, nums2, k)