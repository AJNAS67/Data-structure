let array = [2, -2, 4, 11, 8, 44, -4];

function bubbleSort(arr) {
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
bubbleSort(array);
console.log(array, "array");
