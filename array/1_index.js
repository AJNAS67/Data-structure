// const obj = {
//   name: "ajnas",
//   age: 25,
//   sayMyName: function () {
//     console.log(this.name);
//   },
// };

// obj.hoby = "football";
// console.log(obj);
// obj.passed = true;
// console.log(obj);
// obj.sayMyName()

// const factorial = number => number < 2 ? 1 : number * factorial(number - 1);



const array1=['a','b','c','d','e','f'];
const array2=['z','t','c','r'];
function containsCommenItems(array1,array2){
  for(let i=0;i<array1.length;i++){
    for(let j=0;j<array2.length;j++){
      if(array1[i]==array2[j]){
        return true
      }

    }
  }
  return false
}

let out=containsCommenItems(array1,array2)
console.log(out,'out');
function containsCommenItems2(arr1,arr2){
  let map={};
  for(let i=0;i<arr1.length;i++){

  }
}