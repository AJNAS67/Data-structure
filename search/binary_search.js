//problom:--Given a sorted arraay of `n` elements and a target element `t` ,find the index of `t` in the array . Return -1 if the target element is not found.
//sorted array

function bubbleSort(array) {
  let i, j, temp;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

let arr = [2, 1, 3, 7, 4, 9, 8];
console.log(arr);

// 0(logn)

function binarySearch(array, target) {
  const arr = bubbleSort(array);
  console.log(arr, "arr");

  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr, 84));

// 0(logn) input size reduce half and half so ..
function recursiveBinarySearch(array, target) {
  const arr = bubbleSort(array);
  return Search(arr, target, 0, arr.length - 1);
}
function Search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return Search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return Search(arr, target, middleIndex + 1, rightIndex);
  }
}
console.log(recursiveBinarySearch(arr,1));