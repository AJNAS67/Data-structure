function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    return arr;
  }
}
const array = [1, 4, 2, -5, 4];
const sorted = SelectionSort(array);
console.log(sorted);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
        console.log(arr[i],'arr[]i');
        console.log(arr[minIndex],'minIndex');
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
const arr = [64, 25, 12, 22, 11, 1, -4];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 64]
