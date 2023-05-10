// Find the missing number form 1 o n
const missingNumber = (arr) => {
  let result = 0;
  let n = arr.length + 1;
  let totalSum = (n * (n + 1)) / 2;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return totalSum - result;
};
console.log(missingNumber([1, 2, 3, 4, 5, 7]));

// pass two array if there is common number return true else flase
function checkCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(checkCommon([12,3,4,5,5,67],[22,13,45,7,8]));