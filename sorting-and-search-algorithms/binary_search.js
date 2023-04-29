function bs_iter(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      return `${key} exists in arr and the index is ${mid}`;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function bs_rec(arr, key, indexS = 0, indexE = arr.length - 1) {
  if (indexS > indexE || !arr.length) {
    return -1;
  }

  let mid = Math.floor((indexS + indexE) / 2);

  if (arr[mid] === key) {
    return `${key} exists in nums and its index is ${mid}`;
  }

  if (arr[mid] > key) {
    return bs_rec(arr, key, indexS, mid - 1);
  }

  return bs_rec(arr, key, mid + 1, indexE);
}

const nums = [9, 12, 13, 15, 18, 20];
const target = 12;

const res = bs_iter(nums, target);
// const res = bs_rec(nums, target);
console.log(res);
