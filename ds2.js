function MergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.ceil(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
//   console.log(leftArray, "leftArr");
//   console.log(rightArray, "rightArray");
  return merge(MergeSort(leftArray), MergeSort(rightArray));
}
function merge(left, right) {
  let concatArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      concatArray.push(left.shift());
    } else {
      concatArray.push(right.shift());
    }
  }
  return [...concatArray, ...left, ...right];
}

const array = [1, 3, 4, 2, -5, 77, 33, -11];
console.log(MergeSort(array));
