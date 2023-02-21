let arr = [2, 36, 4, 5, 6, 44, 33];
function sortArray(arr) {
  for (let i = 0; i < arr.length-1 ; i++) {
    for (let j = i+1; j < arr.length ; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log('nested loop',arr);
}
sortArray(arr);
// ---------------------
var input = [2,3,8,1,4,5,9,7,6];

var arr1 = [100,1,4,2,3,6,7,5,23,18];

arr1.forEach((item, index) => {
  if(item < arr1[index - 1]){
    arr1[index] = arr1[index - 1];
    arr1[index - 1] = item; 
  }
})

console.log('using forEach',arr1);

const ar=[1,2,3,4,5,6,7,4,5,0]
console.log(ar);

function remvDuplicate(arr){
   return arr.filter((item,index)=>arr.indexOf(item)==index)
}
let ot=remvDuplicate(ar)
console.log(ot,'oooooooooo');