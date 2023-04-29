function bubble_sort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const nums = [55, -2, 56, 1, 9, 3, 2, 7, 6];
const res = bubble_sort(nums);

console.log(res);
