// in my array have only 0's and 1's only ,which sorting algorithm will i use ?

function sortingZeroAndOnes(arr) {
  let arrayZeros = [];
  let arrayOnes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arrayZeros.push(arr[i]);
    } else {
      arrayOnes.push(arr[i]);
    }
  }

//   both return case we can use
//   return arrayZeros.concat(arrayOnes)
  return [...arrayZeros, ...arrayOnes];
}
console.log(sortingZeroAndOnes([1,  0, 1, 1, 1, 0, 1]));
