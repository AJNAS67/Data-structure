function MergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  return merge(MergeSort(leftArray), MergeSort(rightArray));
}
function merge(leftArr, rightArr) {
  const sortedArray = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }
  return [...sortedArray, ...leftArr, ...rightArr];
}

const array = [1, 2, 3, 4, -1, 9, 98, -4];
let sortedArray = MergeSort(array);
console.log(sortedArray);
